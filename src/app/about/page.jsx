"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[#F9F9F6] dark:bg-gray-900 px-6 md:px-20 py-16 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1">
          <img
            src="/profile.png"
            alt="Reazul Islam Reaz"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-600 shadow-lg mx-auto"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            I'm Reazul Islam Reaz
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A passionate <span className="font-semibold text-blue-600">MERN Stack Developer</span> from Bangladesh. I specialize in building full-stack web applications using technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. I love crafting clean and responsive user interfaces with <strong>Tailwind CSS</strong> and turning complex problems into simple, beautiful solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
