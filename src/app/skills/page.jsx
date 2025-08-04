
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "from-orange-500/20 to-red-600/20",
    iconColor: "text-orange-400",
    glowColor: "shadow-orange-500/25",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "from-blue-500/20 to-blue-700/20",
    iconColor: "text-blue-400",
    glowColor: "shadow-blue-500/25",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "from-yellow-400/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
    glowColor: "shadow-yellow-500/25",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "from-blue-400/20 to-blue-600/20",
    iconColor: "text-blue-300",
    glowColor: "shadow-blue-400/25",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "from-cyan-400/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    glowColor: "shadow-cyan-500/25",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "from-gray-300/20 to-gray-600/20",
    iconColor: "text-gray-300",
    glowColor: "shadow-gray-500/25",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "from-teal-400/20 to-cyan-500/20",
    iconColor: "text-teal-400",
    glowColor: "shadow-teal-500/25",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "from-green-500/20 to-green-700/20",
    iconColor: "text-green-400",
    glowColor: "shadow-green-500/25",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "from-gray-600/20 to-gray-800/20",
    iconColor: "text-gray-300",
    glowColor: "shadow-gray-600/25",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "from-green-600/20 to-green-800/20",
    iconColor: "text-green-500",
    glowColor: "shadow-green-600/25",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "from-purple-500/20 to-gray-700/20",
    iconColor: "text-purple-300",
    glowColor: "shadow-purple-500/25",
  },
];

// Enhanced SkillCard Component
const SkillCard = ({ skill, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3, type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative w-full h-40 cursor-pointer"
    >
      {/* Animated background with multiple layers */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 
                      rounded-2xl backdrop-blur-xl border border-gray-600/30 
                      group-hover:border-gray-400/50 transition-all duration-500 
                      shadow-2xl group-hover:shadow-3xl overflow-hidden"
      >
        {/* Dynamic gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} 
                        opacity-0 group-hover:opacity-100 transition-all duration-500`}
        />

        {/* Animated mesh gradient */}
        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500
                       bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        />

        {/* Shimmer effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 
                       bg-gradient-to-r from-transparent via-white/10 to-transparent
                       transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] 
                       transition-transform duration-1000"
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${80 - i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, 0],
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          className={`text-5xl md:text-6xl mb-4 ${skill.iconColor} group-hover:drop-shadow-lg 
                     transition-all duration-300 filter group-hover:brightness-110`}
        >
          {skill.icon}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          className="text-sm md:text-base font-bold text-gray-300 group-hover:text-white 
                     transition-all duration-300 text-center tracking-wide
                     group-hover:transform group-hover:scale-105"
        >
          {skill.name}
        </motion.h3>

        {/* Subtle progress indicator */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "60%" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`mt-3 h-0.5 bg-gradient-to-r ${skill.color.replace(
            "/20",
            "/60"
          )} rounded-full`}
        />
      </div>

      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 ${skill.glowColor} shadow-2xl -z-10`}
      />
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section
      className="min-h-screen relative overflow-hidden py-14 px-4 sm:px-6 md:px-20
                       bg-gradient-to-br from-slate-950 via-gray-900 to-black"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Larger orbs with better colors */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                     rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-blue-500/10 
                     rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 
                     rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-white/40 rounded-full blur-sm"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] 
                     bg-[size:50px_50px] opacity-60"
      ></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-black mb-4 relative inline-block"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
              My Skills
            </span>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 
                         rounded-full shadow-lg shadow-purple-500/25"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mt-6"
          >
            Cutting-edge technologies and frameworks I leverage to craft
            exceptional digital experiences and scalable solutions
          </motion.p>
        </div>

        {/* Skills Grid - Static Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} delay={index * 0.1} />
          ))}
        </motion.div>

        {/* Enhanced Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { number: "11+", label: "Technologies" },
              { number: "2+", label: "Years Experience" },
              { number: "50+", label: "Projects Built" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 
                          border border-gray-600/30 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl 
                          hover:border-gray-400/50 transition-all duration-500 
                          shadow-2xl hover:shadow-3xl relative overflow-hidden cursor-pointer text-center"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                <div className="relative z-10">
                  <div
                    className="text-3xl md:text-4xl font-black mb-2 md:mb-3 
                                 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
