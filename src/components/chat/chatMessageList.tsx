"use client";

import { Message } from "@/types/message";
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

interface Props {
  messages: Message[];
}

export default function ChatMessageList({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-2">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
