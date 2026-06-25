import { ChatMessage } from "@/lib/types";

interface Props {
  message: ChatMessage;
}

export function ChatMessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`
        flex w-full
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
          rounded-2xl

          text-sm
          leading-6

          whitespace-pre-wrap
          break-words
          
          ${
            isUser
              ? "max-w-[80%] px-4 py-2 bg-slate-100 text-gray-900"
              : "w-full px-4 py-4 bg-transparent text-gray-900"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  );
}
