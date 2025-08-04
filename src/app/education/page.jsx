"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      className="min-h-screen px-6 md:px-20 py-14 transition-colors relative overflow-hidden
                       bg-gradient-to-br from-slate-950 via-gray-900 to-black"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] 
                     bg-[size:50px_50px] opacity-60"
      ></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Enhanced Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 relative inline-block">
            <span
              className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent
                           drop-shadow-2xl"
            >
              Education
            </span>
            {/* Animated underline */}
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl font-light">
            My academic journey and professional development in technology and
            social sciences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Enhanced Education Info */}
          <div className="space-y-8">
            {/* University Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group relative bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 
                        border border-gray-600/30 rounded-2xl p-8 backdrop-blur-xl 
                        hover:border-blue-500/40 transition-all duration-500 
                        shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Accent line */}
              <div
                className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 
                             transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 
                             origin-top rounded-r-full"
              ></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <div className="text-2xl">🎓</div>
                  </div>
                  <div
                    className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full
                                 border border-blue-500/20"
                  >
                    IN PROGRESS
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 
                               transition-colors duration-300"
                >
                  Bachelor of Social Science (Honors)
                </h3>
                <p className="text-gray-300 text-lg mb-2 font-medium">
                  Department of Political Science
                </p>
                <p className="text-gray-400 text-sm mb-1">
                  National University, Bangladesh
                </p>
                <p className="text-gray-500 text-sm font-semibold">
                  Expected Graduation: 2026
                </p>
              </div>
            </motion.div>

            {/* Web Dev Course Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group relative bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 
                        border border-gray-600/30 rounded-2xl p-8 backdrop-blur-xl 
                        hover:border-emerald-500/40 transition-all duration-500 
                        shadow-2xl hover:shadow-emerald-500/10 overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Accent line */}
              <div
                className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-600 
                             transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 
                             origin-top rounded-r-full"
              ></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                    <div className="text-2xl">💻</div>
                  </div>
                  <div
                    className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full
                                 border border-emerald-500/20"
                  >
                    ACTIVE
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-100 
                               transition-colors duration-300"
                >
                  MERN Stack Web Development
                </h3>
                <p className="text-gray-300 text-lg mb-2 font-medium">
                  Full-Stack Development Program
                </p>
                <p className="text-gray-400 text-sm mb-1">Programming Hero</p>
                <p className="text-gray-500 text-sm font-semibold">
                  2024 – Present
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="w-full flex justify-center items-end relative"
          >
            <div className="relative group">
              {/* Glow effect behind image */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-purple-500/10 to-transparent 
                             rounded-3xl blur-2xl transform scale-110 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-500"
              ></div>

              {/* Image container */}
              <div
                className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 
                             border border-gray-600/30 rounded-3xl p-8 backdrop-blur-sm
                             shadow-2xl group-hover:shadow-3xl transition-all duration-500
                             group-hover:border-gray-500/50"
              >
                <img
                  src="/image.png"
                  alt="Education Illustration"
                  className="max-w-xs md:max-w-md w-full h-auto object-contain 
                           filter group-hover:brightness-110 transition-all duration-300
                           drop-shadow-xl"
                />

                {/* Decorative elements */}
                <div
                  className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 
                               rounded-full animate-pulse shadow-lg shadow-blue-500/50"
                ></div>
                <div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 
                               rounded-full animate-pulse shadow-lg shadow-emerald-500/50 delay-75"
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
