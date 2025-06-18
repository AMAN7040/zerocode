"use client";

import { useState } from "react";
import { nanoid } from "nanoid";
import { Message } from "@/types/message";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: nanoid(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsBotTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: nanoid(),
        role: "bot",
        content: `You said: "${content}"`,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsBotTyping(false);
    }, 1000);
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
    isBotTyping,
  };
}
