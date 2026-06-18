"use client";

import { useState } from "react";
import { ActionButton } from "../buttons/ActionButton";

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
    <div className="flex gap-2">
      <input
        className="
          flex-1
          border
          rounded-md
          p-2
        "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ActionButton label="Senden" onClick={handleSend} />
    </div>
  );
}
