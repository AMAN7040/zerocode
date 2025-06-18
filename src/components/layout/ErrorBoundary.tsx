"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("💥 Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen flex-col items-center justify-center text-center text-red-600 dark:text-red-400 px-4">
          <h1 className="text-2xl font-semibold mb-2">Something went wrong.</h1>
          <p className="text-sm opacity-75">
            An unexpected error occurred. Please refresh the page or try again
            later.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
