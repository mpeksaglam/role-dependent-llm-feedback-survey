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

interface ChatModuleProps {
  userRole: UserRole;
  scenarioId: ScenarioStepId;
}
// TODO add limit for 2 messages
export function ChatModule({ userRole, scenarioId }: ChatModuleProps) {
  const welcomeMessage: ChatMessage = {
    id: "welcome", // to prevent hydration error / SSR safe
    role: "assistant",
    content: "Hallo, bitte teilen Sie mir Ihre Anpassung mit.",
  };
  const TRAINING_RESPONSE = "Dies ist eine Testantwort.";

  // Set up surveyState and add welcome message if nothing there yet.
  const { state, setChatHistory } = useSurvey();
  const messages = state.chatHistory[scenarioId] ?? [welcomeMessage];

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
