"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 md:px-20 py-14 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold border-b-2 border-black dark:border-white pb-4 mb-12 inline-block">
          Education
        </h2>

        <div className="space-y-8">
          {/* University */}
          <div className="border-l-4 pl-6 border-black dark:border-white">
            <h3 className="text-2xl font-semibold">
              Bachelor of Social Science (Honors)
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Department of Political Science
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              National University, Bangladesh
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Expected Graduation: 2026
            </p>
          </div>

          {/* Web Dev Course */}
          <div className="border-l-4 pl-6 border-black dark:border-white">
            <h3 className="text-2xl font-semibold">
              MERN Stack Web Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Full-Stack Development Program
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Programming Hero
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              2024 – Present
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
