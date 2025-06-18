"use client";
import { useChatContext } from "@/context/ChatContext";
import { cn } from "@/lib/utlis";
import { useEffect, useRef } from "react";

export default function ChatWindow() {
  const { messages, isLoading } = useChatContext();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-3 p-4 overflow-y-auto flex-1">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={cn(
            "p-3 rounded-xl max-w-[75%] text-sm leading-relaxed shadow-sm",
            msg.role === "user"
              ? "bg-wa-green text-white self-end rounded-br-none"
              : "bg-wa-bot-bubble text-wa-text self-start rounded-bl-none"
          )}
        >
          {msg.content}
        </div>
      ))}
      {isLoading && (
        <p className="text-sm text-muted-foreground">Bot is typing...</p>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
