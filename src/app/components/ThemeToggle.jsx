// components/ThemeToggle.jsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDark(storedTheme === "dark");
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm font-semibold text-black dark:text-white transition"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
