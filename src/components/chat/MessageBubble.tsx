import { cn } from "@/lib/utlis";
import { Message } from "@/types/message";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn("max-w-lg px-4 py-2 rounded-lg text-sm", {
        "bg-primary text-white self-end": isUser,
        "bg-muted text-foreground self-start": !isUser,
      })}
    >
      {message.content}
    </div>
  );
}
