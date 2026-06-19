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
        className="
          flex-1
          rounded-full
          border
          border-gray-300
          px-4
          py-3
          text-sm
          outline-none
          focus:border-gray-500
          focus:ring-0
        "
        placeholder="Feedback eingeben"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
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

/* Alternative send button TODO
<button
  onClick={handleSend}
  className="
    px-5
    py-3

    rounded-full

    bg-black
    text-white

    text-sm
    font-medium

    hover:opacity-90
    transition
  "
>
  Senden
</button> */
