"use client";

import { ChatPanel } from "@/components/chat/ChatPanel";
import { scenarioConfig } from "@/config/scenarioConfig";
import {
  ChatMessage,
  ChatRequest,
  ChatResponse,
  ScenarioStepId,
  SURVEY_STEPS,
  UserRole,
} from "@/lib/types";
import { useSurvey } from "@/survey/engine/helpers/useSurvey";

// static constants
const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome", // to prevent hydration error / SSR safe
  role: "assistant",
  content: "Hallo, bitte teilen Sie mir Ihre Anpassung mit.",
};
const TRAINING_WELCOME_MESSAGE: ChatMessage = {
  id: "training_welcome", // to prevent hydration error / SSR safe
  role: "assistant",
  content: "Hallo, in diesem Chatfeld können Sie mit ChatGPT interagieren.",
};
const TRAINING_RESPONSE = "Dies ist eine Testantwort.";

interface ChatModuleProps {
  userRole: UserRole;
  scenarioId: ScenarioStepId;
}

export function ChatModule({ userRole, scenarioId }: ChatModuleProps) {
  // Access survey context
  const { state, setChatHistory } = useSurvey();

  // decide default message based on scenarioId
  const defaultMessage =
    scenarioId === SURVEY_STEPS.TRAINING_TASK
      ? TRAINING_WELCOME_MESSAGE
      : WELCOME_MESSAGE;
  // display default welcome message if nothing there yet
  const messages: ChatMessage[] = state.chatHistory[scenarioId] ?? [
    defaultMessage,
  ];

  // get current config and questions in order to send them to OpenAI
  const config = scenarioConfig[scenarioId];
  const questions = config.questions[userRole];
  // create object with all questions { q.text: user-selected answer, ...}
  const selectedAnswers = questions.questions.reduce<
    Record<string, string | number | undefined> // answer is number, string, or nothing yet
  >((acc, question) => {
    acc[question.id] = state.answers[question.id];
    return acc;
  }, {});

  // Send user input to OpenAI API
  const handleSend = async (text: string) => {
    // create userMessage from new input text and update
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    const updatedMessages = [...messages, userMessage];

    // Test answer in training
    if (scenarioId === SURVEY_STEPS.TRAINING_TASK) {
      setChatHistory(scenarioId, [
        ...updatedMessages,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: TRAINING_RESPONSE,
        },
      ]);
      return;
    }

    // add new user message to message state
    setChatHistory(scenarioId, updatedMessages);

    // request body
    const requestBody: ChatRequest = {
      scenarioId,
      userRole,
      messages: updatedMessages,
      selectedAnswers,
    };
    // send requestBody to backend endpoint and await http response
    try {
      const apiResponse = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(requestBody),
      });
      // receive and parse http response from backend
      const chatResponse: ChatResponse = await apiResponse.json();

      // TODO remove debug
      // console.group("message", chatResponse.message);

      const parsedResponse = JSON.parse(chatResponse.message);
      // extract fields to display for user
      const userConfRequired: boolean = parsedResponse.confirmation_required;
      const sysInterpretation =
        parsedResponse.revised_system_interpretation_for_user ??
        parsedResponse.system_interpretation_for_user;
      const confirmationQuestion = parsedResponse.confirmation_question;

      // build response message
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: userConfRequired
          ? `${sysInterpretation}\n\n${confirmationQuestion}`
          : sysInterpretation,
      };
      // update state
      setChatHistory(scenarioId, [...updatedMessages, assistantMessage]);
      // in case any errors happen (invalid JSON output etc...)
    } catch {
      setChatHistory(scenarioId, [
        ...updatedMessages,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Es ist ein Fehler bei der Anfrage unterlaufen, bitte versuchen Sie es erneut.",
        },
      ]);
    }
  };

  return (
    <div
      className="
        h-[600px]
        md:h-[700px]
      "
    >
      <ChatPanel messages={messages} onSend={handleSend} />
    </div>
  );
}
