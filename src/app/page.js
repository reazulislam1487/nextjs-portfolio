"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const texts = [
  "MERN Stack Developer passionate about clean code.",
  "Responsive design enthusiast.",
  "Building full-stack web applications.",
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
    <main className="min-h-screen  transition-colors flex items-center justify-center px-6 md:px-16">
      <div className="max-w-7xl w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center py-20">
        {/* Left: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Typing Heading */}
          <h1 className="text-3xl  md:text-4xl xl:text-5xl font-bold leading-tight h-12 md:h-16">
            {typedText}
            <span className="inline-block w-1 h-7 animate-blink ml-1"></span>
          </h1>

          {/* Text Slider */}
          <div className="h-13 md:h-13 relative overflow-hidden z-50">
            <AnimatePresence mode="wait">
              <motion.p
                key={sliderIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl absolute"
              >
                {texts[sliderIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 rounded-xl bg-white text-black dark:bg-black dark:text-white hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="/Reazul_Islam_Reaz_MERN_Stack_Developer_Resume.pdf"
              download="Reazul_Islam_Reaz_MERN_Stack_Developer_Resume.pdf"
              className="inline-block px-6 py-3 rounded-xl bg-white text-black dark:bg-black dark:text-white hover:opacity-90 transition"
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4 text-xl">
            <a
              href="https://github.com/reazulislam1487"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <FaGithub size={iconSize} />
            </a>
            <a
              href="https://www.linkedin.com/in/reazulislam1487"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <FaLinkedin size={iconSize} />
            </a>
            <a
              href="mailto:reazulislam1487@gmail.com"
              className="hover:opacity-80 transition"
            >
              <FiMail size={iconSize} />
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-black dark:border-white">
            <Image
              src="/reazul-profile.jpg"
              alt="Reazul Islam Reaz"
              width={300}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
