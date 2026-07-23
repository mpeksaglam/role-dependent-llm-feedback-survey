"use client";

import { ChatPanel } from "@/components/chat/ChatPanel";
import { scenarioConfig } from "@/config/scenarioConfig";
import {
  ChatMessage,
  ChatRequest,
  ChatResponse,
  LlmResponse,
  ScenarioStepId,
  SURVEY_STEPS,
  UserRole,
} from "@/lib/types";
import { useSurvey } from "@/survey/engine/helpers/useSurvey";
import { useRef } from "react";

// static constants
const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome", // to prevent hydration error / SSR safe
  role: "assistant",
  content: "Hallo, bitte teilen Sie mir Ihre Anpassung mit.",
};
const TRAINING_WELCOME_MESSAGE: ChatMessage = {
  id: "training_welcome", // to prevent hydration error / SSR safe
  role: "assistant",
  content:
    "Hallo, in diesem Chatfeld können Sie zusätzliches Feedback zur gezeigten Roboterhandlung eingeben. " +
    "Im Rahmen der Trainingsaufgabe dient dieser Chat ausschließlich zum Kennenlernen der Funktion.",
};
// turned into ChatMessage later
const TRAINING_RESPONSE_CONTENT =
  "Vielen Dank für Ihr Feedback. Im weiteren Verlauf der Studie werden Ihre Eingaben verarbeitet und darauf " +
  "basierend Antworten erzeugt. Diese Trainingsantwort dient lediglich dazu, Ihnen die Funktionsweise des Chats zu zeigen.";

interface ChatModuleProps {
  userRole: UserRole;
  scenarioId: ScenarioStepId;
}

export function ChatModule({ userRole, scenarioId }: ChatModuleProps) {
  // Access survey context
  const {
    state,
    setChatData,
    setChatHistory,
    lockNavigation,
    unlockNavigation,
  } = useSurvey();

  const isWaitingRef = useRef(false);

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
    // if waiting for api response, ignore double sending of messages
    if (isWaitingRef.current) {
      return;
    }
    // lock user out of sending multiple messages at once
    isWaitingRef.current = true;
    // Prevent user from clicking next before the response came
    lockNavigation();
    // create userMessage from new input text and update/add
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    const updatedMessages = [...messages, userMessage];

    // get typing animation message
    const messagesWithTyping = [
      ...updatedMessages,
      { id: "typing", role: "assistant" as const, content: "" },
    ];

    // Test answer in training
    if (scenarioId === SURVEY_STEPS.TRAINING_TASK) {
      setChatData(
        scenarioId,
        [
          ...updatedMessages,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: TRAINING_RESPONSE_CONTENT,
          },
        ],
        {} as LlmResponse,
      );
      isWaitingRef.current = false;
      unlockNavigation();
      return;
    }

    // display message + typing for UI
    setChatHistory(scenarioId, messagesWithTyping);

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
      const parsedResponse = JSON.parse(chatResponse.message);

      // extract fields to display for user
      const userConfRequired: boolean = parsedResponse.confirmation_required;
      const sysInterpretation =
        parsedResponse.revised_system_interpretation_for_user ??
        parsedResponse.system_interpretation_for_user;
      const confirmationQuestion = userConfRequired
        ? `${parsedResponse.confirmation_question?.trim() ?? "Ist das korrekt?"} ` +
          "Falls nicht, beschreiben Sie die gewünschte Korrektur in Ihrer Antwort."
        : null;

      // in case no user conf required:
      const lastResponse = parsedResponse.confirmation_response;

      // build response message
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: userConfRequired
          ? `${sysInterpretation}\n\n${confirmationQuestion}`
          : (lastResponse ??
            "Vielen Dank. Die Interpretation wurde bestätigt."),
      };

      const newMessages = [...updatedMessages, assistantMessage];
      // update state without typing message
      setChatData(scenarioId, newMessages, parsedResponse);
      // in case any errors happen (invalid JSON output etc...)
    } catch {
      setChatData(
        scenarioId,
        [
          ...updatedMessages,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "Bei der Verarbeitung Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
          },
        ],
        { error: "Fetch or parse failed" } as unknown as LlmResponse,
      );
    } finally {
      isWaitingRef.current = false;
      unlockNavigation();
    }
  };

  return (
    <div
      className="
        w-full
        h-[600px]
        md:h-[700px]
      "
    >
      <ChatPanel messages={messages} onSend={handleSend} />
    </div>
  );
}
