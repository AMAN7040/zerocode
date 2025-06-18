"use client";

import { useState } from "react";
import { useChatContext } from "@/context/ChatContext";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const { sendMessage, isLoading } = useChatContext();

  const handleSend = async () => {
    if (!input.trim()) return;
    await sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="p-4 border-t bg-background flex gap-2">
      <input
        type="text"
        className="flex-1 p-2 rounded-md border border-border bg-card"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      <button
        onClick={handleSend}
        disabled={isLoading}
        className="bg-primary text-white px-4 py-2 rounded-md disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
}
