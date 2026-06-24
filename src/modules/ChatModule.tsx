"use client";

import { useState } from "react";

import { ChatMessage, ChatResponse, SURVEY_STEPS, UserRole } from "@/lib/types";
import { ChatPanel } from "@/components/chat/ChatPanel";

interface ChatModuleProps {
  userRole: UserRole;
  scenarioId: string;
}
// TODO add limit for 2 messages
export function ChatModule({ userRole, scenarioId }: ChatModuleProps) {
  const TRAINING_RESPONSE = "Dies ist eine Testantwort.";

  const [messages, setMessages] = useState<ChatMessage[]>([]);

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
      setMessages([
        ...updatedMessages,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: TRAINING_RESPONSE,
        },
      ]);

      return;
    }

    // add new user message to messages
    setMessages(updatedMessages);

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
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
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
