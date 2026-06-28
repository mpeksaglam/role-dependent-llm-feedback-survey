"use client";

import { ChatMessage } from "@/lib/types";
import { ChatInput } from "./ChatInput";
import { ChatMessageBubble } from "./ChatMessageBubble";
import { useEffect, useRef } from "react";

interface ChatPanelProps {
  messages: ChatMessage[];
  onSend: (message: string) => void;
}

export function ChatPanel({ messages, onSend }: ChatPanelProps) {
  // auto scroll to bottom
  const messagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = messagesRef.current;
    if (!container) return;
    // smooth scroll to new message
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      className="
        h-full
        flex
        flex-col
        overflow-hidden

        rounded-3xl
        border
        border-gray-200
        
        bg-white
        shadow-xl
    "
    >
      {/* Messages */}
      <div
        ref={messagesRef}
        className="
          flex-1
          min-h-0
          overflow-y-auto

          p-4
          space-y-4
          
        "
      >
        {messages.map((msg) => (
          <ChatMessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* Input */}
      <div className="p-4">
        <ChatInput onSend={onSend} />
      </div>
    </div>
  );
}
