export default function ChatModule() {
  return (
    <div className="border rounded-lg p-4 h-full">

      <h2 className="font-semibold mb-4">
        Chat Assistant
      </h2>

      <div className="border rounded p-3 h-96 overflow-y-auto mb-4">
        <p>Hello! How can I help you?</p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded px-3 py-2"
        />

        <button className="border rounded px-4 py-2">
          Send
        </button>
      </div>

    </div>
  );
}