"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-black shadow-md py-4 px-6 flex justify-center gap-10 select-none">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link key={href} href={href} passHref>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className={`relative font-semibold transition-colors duration-300 ${
                isActive ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {label}
              {/* underline */}
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-0.5 bg-black dark:bg-white rounded"
                style={{ width: isActive ? "100%" : "0%" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.a>
          </Link>
        );
      })}
    </nav>
  );
}
