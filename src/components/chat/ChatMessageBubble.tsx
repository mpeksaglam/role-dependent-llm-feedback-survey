import { ChatMessage } from "@/lib/types";

interface Props {
  message: ChatMessage;
}

export function ChatMessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`
        flex
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
          max-w-[80%]
          px-3
          py-2
          rounded-2xl
          text-sm
          leading-relaxed

          ${isUser ? "bg-gray-100 text-black" : "text-black"}
        `}
      >
        {message.content}
      </div>
    </div>
  );
}
