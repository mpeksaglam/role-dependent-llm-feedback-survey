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
  const bottomRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="
        h-full
        flex
        flex-col
        rounded-2xl
        border
        border-gray-200
        bg-white
        overflow-hidden
        shadow-sm
    "
    >
      {/* Messages */}
      <div
        className="
          flex-1
          overflow-y-auto
          px-4
          py-4
          space-y-4
        "
      >
        {messages.map((msg) => (
          <ChatMessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <ChatInput onSend={onSend} />
      </div>
    </div>
  );
}
