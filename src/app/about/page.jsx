"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen  px-6 md:px-20 py-14 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold border-b-2  pb-4 inline-block">
          About Me
        </h2>

        <p className="text-lg leading-relaxed ">
          I'm <span className="font-semibold  ">Reazul Islam Reaz</span>, a
          passionate MERN Stack Developer from Bangladesh. Currently pursuing my
          honors in Political Science, I’ve also dived deep into the world of
          web development to build responsive, full-stack applications that
          solve real-world problems.
        </p>

        <p className="text-lg leading-relaxed ">
          With hands-on experience in React, Node.js, Express, MongoDB, and
          Firebase, I enjoy bringing ideas to life through clean code and
          intuitive interfaces. Whether it's developing a personal project or
          collaborating on a team, I strive for functionality, performance, and
          accessibility in everything I build.
        </p>

        <p className="text-lg leading-relaxed">
          Outside of coding, I’m deeply interested in journalism, politics, and
          learning new technologies. My goal is to blend technical skills with
          communication to make meaningful impact — online and offline.
        </p>

        <div className="pt-6">
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl bg-white text-black dark:bg-black dark:text-white hover:opacity-90 transition"
          >
            Let's Connect
          </a>
          
        </div>
      </motion.div>
    </section>
  );
}
