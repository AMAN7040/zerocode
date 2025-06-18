import ChatWindow from "@/components/chat/ChatWindow";
import AuthGuard from "@/components/layout/AuthGuard";
import ChatInput from "@/components/layout/ChatLayout";
import ToggleThemeClient from "@/components/theme/ToggleThemeClient";

import React from "react";

const page = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <header className="w-full px-4 py-2 flex justify-end bg-[var(--wa-light-bg)] dark:bg-[var(--wa-dark-bg)] border-b border-border">
          <ToggleThemeClient />
        </header>

        <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto">
          <div className="flex-1 overflow-y-auto">
            <ChatWindow />
          </div>

          <ChatInput />
        </main>
      </div>
    </AuthGuard>
  );
};

export default page;
