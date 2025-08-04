//

"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className=" bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden px-4 sm:px-6 md:px-20 py-20 transition-colors"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-700/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(75,85,99,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(75,85,99,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center space-y-8 relative z-10"
      >
        <div className="text-center ">
          <h2 className="text-3xl md:text-5xl font-black mb-2 relative inline-block">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
             About Me
            </span>
          </h2>

        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-gray-300">
            I'm{" "}
            <span className="font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-700 px-2 py-1 rounded">
              Reazul Islam Reaz
            </span>
            , a passionate MERN Stack Developer from Bangladesh. Currently
            pursuing my honors in Political Science, I've also dived deep into
            the world of web development to build responsive, full-stack
            applications that solve real-world problems.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            With hands-on experience in JavaScript, TypeScript, React, NextJs,
            Node.js, Express, MongoDB, and Firebase, I enjoy bringing ideas to
            life through clean code and intuitive interfaces. Whether it's
            developing a personal project or collaborating on a team, I strive
            for functionality, performance, and accessibility in everything I
            build.
          </p>

          <p className="text-lg leading-relaxed text-gray-400">
            Outside of coding, I'm deeply interested in journalism, politics,
            and learning new technologies. My goal is to blend technical skills
            with communication to make meaningful impact — online and offline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-gray-800 to-black border border-gray-600 text-white font-semibold hover:shadow-2xl hover:shadow-gray-700/25 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
