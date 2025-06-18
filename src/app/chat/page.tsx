import AuthGuard from "@/components/layout/AuthGuard";
import ChatLayout from "@/components/layout/ChatLayout";
import React from "react";

const page = () => {
  return (
    <AuthGuard>
      <ChatLayout />
    </AuthGuard>
  );
};

export default page;
