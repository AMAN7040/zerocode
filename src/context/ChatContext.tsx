"use client";

import { createContext, useContext, useState } from "react";
import { ChatMessage, sendMessageToBot } from "@/services/charService";

interface ChatContextType {
  messages: ChatMessage[];
  sendMessage: (msg: string) => Promise<void>;
  isLoading: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: string) => {
    const userMsg: ChatMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, userMsg]);

    setIsLoading(true);
    try {
      const botMsg = await sendMessageToBot(message);
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Something went wrong. Try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isLoading }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context)
    throw new Error("useChatContext must be used within ChatProvider");
  return context;
};
