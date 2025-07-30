// app/components/Providers.jsx
"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
