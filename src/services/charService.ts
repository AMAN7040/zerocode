export interface ChatMessage {
  role: "user" | "bot";
  content: string;
}

export async function sendMessageToBot(message: string): Promise<ChatMessage> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const botReply: ChatMessage = {
    role: "bot",
    content: `Echo: ${message}`,
  };

  return botReply;
}