// app/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const current = resolvedTheme;

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className=" shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Reazul
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:space-x-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 font-medium transition ${
                    isActive ? "underline" : "hover:underline"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(current === "dark" ? "light" : "dark")}
              className="p-2 rounded-md transition"
              aria-label="Toggle Dark Mode"
            >
              {current === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md transition"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden  border-t ">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`block px-3 py-2 font-medium transition ${
                    isActive ? "underline" : "hover:underline"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
