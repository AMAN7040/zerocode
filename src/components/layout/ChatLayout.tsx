"use client";

import { useChat } from "@/app/hooks/chat/useChat";
import ChatMessageList from "../chat/chatMessageList";
import ChatInput from "../chat/chatInput";

export default function ChatLayout() {
  const { messages, input, setInput, sendMessage, isBotTyping } = useChat();

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <ChatMessageList messages={messages} />
        {isBotTyping && (
          <div className="text-sm text-muted-foreground animate-pulse">
            Bot is typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={() => sendMessage(input)}
          disabled={isBotTyping}
        />
      </div>
    </div>
  );
}
