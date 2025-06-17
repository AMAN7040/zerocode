"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { clsx } from "clsx";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle = () => {
  const { theme, handleTheme } = useThemeContext();

  const toggleTheme = () => {
    handleTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative w-10 h-10 flex items-center justify-center p-2 rounded border bg-foreground text-background transition-colors duration-300"
    >
      <FiSun
        className={clsx(
          "absolute w-5 h-5 text-yellow-500 transition-all duration-300",
          theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-75"
        )}
      />
      <FiMoon
        className={clsx(
          "absolute w-5 h-5 text-blue-400 transition-all duration-300",
          theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-75"
        )}
      />
    </button>
  );
};
