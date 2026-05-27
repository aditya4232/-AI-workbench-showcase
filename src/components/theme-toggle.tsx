"use client";

import { useState, useCallback } from "react";
import { Sun, Moon } from "@/components/icons";

const THEME_STORAGE_KEY = "theme";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored !== null) {
    const isDark = stored === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    return isDark;
  }
  document.documentElement.classList.remove("dark");
  return false;
}

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(getInitialTheme);

  const toggle = useCallback(() => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem(THEME_STORAGE_KEY, newDark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={toggle}
      className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
