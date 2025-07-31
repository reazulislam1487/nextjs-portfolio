"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-14 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold border-b-2 pb-4 mb-12 inline-block">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Education Info */}
          <div className="space-y-8">
            {/* University */}
            <div className="border-l-4 pl-6">
              <h3 className="text-2xl font-semibold">
                Bachelor of Social Science (Honors)
              </h3>
              <p>Department of Political Science</p>
              <p className="text-sm">National University, Bangladesh</p>
              <p className="text-sm">Expected Graduation: 2026</p>
            </div>

            {/* Web Dev Course */}
            <div className="border-l-4 pl-6">
              <h3 className="text-2xl font-semibold">
                MERN Stack Web Development
              </h3>
              <p>Full-Stack Development Program</p>
              <p className="text-sm">Programming Hero</p>
              <p className="text-sm">2024 – Present</p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full flex justify-center items-end">
            <img
              src="/image.png"
              alt="Education Illustration"
              className="max-w-xs md:max-w-sm w-full h-auto object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
