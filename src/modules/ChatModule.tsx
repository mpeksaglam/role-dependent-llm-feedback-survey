"use client";

import { useState } from "react";

import { ChatMessage, SURVEY_STEPS } from "@/lib/types";
import { ChatPanel } from "@/components/chat/ChatPanel";

interface ChatModuleProps {
  scenarioId: string;
}
// TODO add limit for 2 messages
export function ChatModule({ scenarioId }: ChatModuleProps) {
  const TRAINING_RESPONSE = "Dies ist eine Testantwort.";

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSend = async (text: string) => {
    // create userMessage from input text
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    // Test answer in training
    if (scenarioId === SURVEY_STEPS.TRAINING_TASK) {
      setMessages((prev) => [
        ...prev,
        userMessage,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: TRAINING_RESPONSE,
        },
      ]);

      return;
    }
    // add user messages to messages
    setMessages((prev) => [...prev, userMessage]);

    // get response
    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          scenarioId,
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();
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
