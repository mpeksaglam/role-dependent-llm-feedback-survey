"use client";

import { ChatPanel } from "@/components/chat/ChatPanel";
import {
  ChatMessage,
  ChatResponse,
  ScenarioStepId,
  SURVEY_STEPS,
  UserRole,
} from "@/lib/types";
import { useSurvey } from "@/survey_engine/helpers/useSurvey";

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
// TODO add limit for 2 messages
export function ChatModule({ userRole, scenarioId }: ChatModuleProps) {
  // Access surveyState
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

  // Handle user input/message
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

    // send chat history to API and request response
    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          scenarioId,
          userRole,
          messages: updatedMessages,
        }),
      });
      // parse API response
      const data: ChatResponse = await response.json();
      setChatHistory(scenarioId, [
        ...updatedMessages,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch {
      setChatHistory(scenarioId, [
        ...updatedMessages,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Fehler bei der Anfrage",
        },
      ]);
    }
  };

  return <ChatPanel messages={messages} onSend={handleSend} />;
}
