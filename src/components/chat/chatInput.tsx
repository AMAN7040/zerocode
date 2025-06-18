"use client";

import { cn } from "@/lib/utlis";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  disabled?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Type your message..."
        className={cn(
          "flex-1 p-2 border border-border rounded-md bg-background text-foreground",
          disabled && "opacity-50"
        )}
      />
      <button
        onClick={onSend}
        disabled={disabled || value.trim() === ""}
        className="px-4 py-2 bg-primary text-white rounded-md disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
}
