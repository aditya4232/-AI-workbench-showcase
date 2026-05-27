"use client";

import { useState, useEffect, useCallback } from "react";
import { Sun, Moon } from "@/components/icons";

const THEME_STORAGE_KEY = "theme";

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored !== null) {
      const isDark = stored === "dark";
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
    // No stored preference: default to light
  }, []);

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
