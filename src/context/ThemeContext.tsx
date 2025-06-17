"use client";

import { applyTheme, getSystemTheme } from "@/lib/theme";
import { Theme } from "@/types/themeType";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: Theme;
  handleTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>({
  theme: "light",
  handleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const resolved = stored || getSystemTheme();
    applyTheme(resolved);
    setTheme(resolved);
  }, []);

  const handleTheme = (newTheme: Theme) => {
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
