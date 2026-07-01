"use client";

export function TypingIndicator() {
  return (
    <div className="flex w-full justify-start animate-fade-in">
      {/* Nutzt exakt dasselbe Padding- und Sprechblasen-Layout wie die KI-Nachrichten */}
      <div className="w-full px-4 py-3 bg-transparent flex items-center gap-1.5 h-6">
        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full animate-bounce [animation-delay:0ms]" />
        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}
