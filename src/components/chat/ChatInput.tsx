"use client";

import { ArrowUpFromDot } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) {
      return;
    }

    onSend(text);

    setText("");
  };

  return (
    <div className="flex items-end gap-2">
      <input
        placeholder="Feedback eingeben"
        value={text}
        onChange={(e) => setText(e.target.value)}
        // press enter to send
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
        className="
          flex-1
          rounded-full
          border
          border-gray-200
          bg-gray-50 
          px-5
          py-3
          outline-none
          focus:border-gray-400
          transition
        "
      />
      <button
        onClick={handleSend}
        className="
          h-11
          w-11
          rounded-full
          bg-black
          text-white
          flex
          items-center
          justify-center
          hover:opacity-90
          transition
          cursor-pointer
        "
      >
        <ArrowUpFromDot size={20} />
      </button>
    </div>
  );
}
