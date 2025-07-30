
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Apply theme on toggle
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Check stored theme on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDark(storedTheme === "dark"); // default: false (light)
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-3 py-1 rounded  text-sm font-semibold transition"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
