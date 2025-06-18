"use client";

import { useChatContext } from "@/context/ChatContext";
import { cn } from "@/lib/utlis";

export default function ChatWindow() {
  const { messages, isLoading } = useChatContext();

  return (
    <div className="flex flex-col gap-3 p-4 overflow-y-auto h-full">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={cn(
            "p-3 rounded-lg max-w-xs md:max-w-md",
            msg.role === "user"
              ? "bg-primary text-white self-end"
              : "bg-muted text-foreground self-start"
          )}
        >
          {msg.content}
        </div>
      ))}

      {isLoading && (
        <p className="text-sm text-muted-foreground self-start">
          Bot is typing...
        </p>
      )}
    </div>
  );
}
