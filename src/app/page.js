"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const texts = [
  "Full Stack Backend Developer focused on scalable and clean code.",
  "Backend Engineer experienced with Node.js, Express, NestJs and MongoDB & PostgreSQL.",
  "Building high-performance, SEO-friendly web applications with React and Next.js.",
];

export default function Home() {
  // Typing effect state for heading
  const fullText = "I'm Reazul Islam Reaz";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  // Text slider index for below heading
  const [sliderIndex, setSliderIndex] = useState(0);

  // Typing effect for heading
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Text slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const iconSize = 28;

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-700/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(75,85,99,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(75,85,99,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 flex items-center justify-center px-6 md:px-16 min-h-screen">
        <div className="max-w-7xl w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Typing Heading */}
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r 
                       from-purple-400 via-pink-400 to-cyan-400 tracking-[0.3em] uppercase mb-6
                       animate-pulse"
              >
                ✦ Welcome to my portfolio ✦
              </motion.div>
              <h1 className="text-3xl md:text-3xl lg:4xl xl:text-5xl font-bold leading-tight text-white">
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="inline-block w-1 h-8 md:h-12 bg-gray-400 animate-pulse ml-2"></span>
              </h1>
            </div>

            {/* Text Slider */}
            <div className="h-16 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={sliderIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl md:text-2xl text-gray-300 absolute font-light"
                >
                  {texts[sliderIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 pt-4"
            >
              <button className="group relative cursor-pointer px-8 py-4 rounded-full bg-gradient-to-r from-gray-800 to-black border border-gray-600 text-white font-semibold hover:shadow-2xl hover:shadow-gray-700/25 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="/Reazul_Islam_Reaz_Backend_Developer_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                // className="hidden sm:block"
              >
                <button className=" px-8 py-4 rounded-full w-full cursor-pointer border-2 border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  Download Resume
                </button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 pt-6"
            >
              <a
                href="https://github.com/reazulislam1487"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900/50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/reazulislam1487"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900/50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:reazulislam1487@gmail.com"
                className="p-3 rounded-full bg-gray-900/50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Profile container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-6xl text-gray-600">
                      <Image
                        src="/reaz.png"
                        alt="Description of image"
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, -20, 0],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                ⚡
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                  y: [0, 15, 0],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                className="absolute -bottom-2 -left-6 w-10 h-10 bg-gradient-to-r from-gray-800 to-black border border-gray-600 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                💻
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
