import { ChatMessage as Message } from "@/lib/types";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`
        rounded-sm
        p-3

        ${message.role === "user" ? "bg-gray-100" : "bg-blue-50"}
      `}
    >
      {message.content}
    </div>
  );
}
