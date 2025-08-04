"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-black/95 backdrop-blur-md px-4 sm:px-6 md:px-20 border-b border-gray-700/50 shadow-2xl shadow-gray-900/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold group">
              <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-102">
                {/* Placeholder logo with gradient border */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-600 to-gray-800 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-4 lg:space-x-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <div key={href} className="relative group pb-2">
                  <Link
                    href={href}
                    className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                      isActive
                        ? "text-white bg-gray-800/50 border border-gray-600"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                    }`}
                  >
                    {label}
                    {!isActive && (
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-gray-600 to-gray-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center ">
            {/* Resume */}
            <a
              href="/Reazul_Islam_Reaz_MERN_Stack_Developer_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block "
            >
              <button className="px-4 py-2  lg:px-6 lg:py-3 rounded-full cursor-pointer border-2 border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300 transform">
                Resume
              </button>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 rounded-full bg-gray-800/50 border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm"
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
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`block px-4 py-3 font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-white bg-gray-800/50 border border-gray-600"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/30"
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
