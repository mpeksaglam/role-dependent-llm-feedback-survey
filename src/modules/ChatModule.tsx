"use client";

import { useState } from "react";

import { ChatMessage, SURVEY_STEPS } from "@/lib/types";
import { ChatPanel } from "@/components/chat/ChatPanel";

interface ChatModuleProps {
  scenarioId: string;
}

export function ChatModule({ scenarioId }: ChatModuleProps) {
  const TRAINING_RESPONSE = "Dies ist eine Testantwort.";

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome", // to prevent hydration error / SSR safe
      role: "assistant",
      content: "Hallo, wie kann ich helfen?",
    },
  ]);

  const handleSend = (text: string) => {
    // immer zuerst User Message hinzufügen
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

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

    // später OpenAI API Call in HandleSend
    setMessages((prev) => [...prev, userMessage]);
  };

  return <ChatPanel messages={messages} onSend={handleSend} />;
}
