"use client";

import { useState } from "react";

import { ChatMessage } from "@/lib/types";

import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage as ChatBubble } from "@/components/chat/ChatMessage";

export function ChatModule() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hallo, wie kann ich helfen?",
    },
  ]);

  const handleSend = (text: string) => {
    setMessages((prev) => [
      ...prev,

      {
        role: "user",
        content: text,
      },
    ]);
  };

  return (
    <div
      className="
        border
        rounded-md
        p-4

        flex
        flex-col
        gap-4
      "
    >
      <div className="space-y-2">
        {messages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}
