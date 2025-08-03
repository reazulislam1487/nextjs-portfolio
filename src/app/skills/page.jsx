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
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.00,
        y: -5,
        rotateY: 5,
        transition: { duration: 0.3, type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative min-w-[220px] h-36 cursor-pointer perspective-1000"
    >
      {/* Animated background with multiple layers */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/60 to-black/80 
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
            scale: 1.02,
            transition: { duration: 0.5 },
          }}
          className={`text-4xl mb-4 ${skill.iconColor} group-hover:drop-shadow-lg 
                     transition-all duration-300 filter group-hover:brightness-110`}
        >
          {skill.icon}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          className="text-sm font-bold text-gray-300 group-hover:text-white 
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

// Enhanced Marquee Component
const Marquee = ({ children, direction = "left", speed = 50 }) => {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ width: "200%" }}
      >
        <div className="flex space-x-8">
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      className="min-h-screen relative overflow-hidden py-14 px-6 md:px-20
                       bg-gradient-to-br from-slate-950 via-gray-900 to-black"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Larger orbs with better colors */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                     rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-l from-cyan-500/20 to-blue-500/20 
                     rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-80 h-80 bg-gradient-to-tr from-emerald-500/15 to-teal-500/15 
                     rounded-full blur-3xl"
        />

        {/* Additional floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            className={`absolute w-2 h-2 bg-white/20 rounded-full blur-sm`}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] 
                     bg-[size:60px_60px] opacity-40"
      ></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white border-b-2 border-gray-600 pb-4 inline-block"
          >
            My Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl  max-w-3xl mx-auto leading-relaxed font-light
                       bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent"
          >
            Cutting-edge technologies and frameworks I leverage to craft
            exceptional digital experiences and scalable solutions
          </motion.p>
        </div>

        {/* Enhanced Skills Marquees */}
        <div className="space-y-16">
          {/* First Row */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <Marquee direction="left" speed={40}>
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} delay={index * 0.1} />
              ))}
            </Marquee>
          </motion.div>

          {/* Enhanced Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center relative"
          >
            <div
              className="h-px bg-gradient-to-r from-transparent via-gray-500 
                           to-transparent w-full max-w-6xl relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent 
                             via-purple-400/50 to-transparent animate-pulse"
              ></div>
            </div>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 
                           bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full 
                           animate-pulse shadow-lg shadow-purple-500/50"
            ></div>
          </motion.div>

          {/* Second Row */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Marquee direction="right" speed={35}>
              {skills
                .slice()
                .reverse()
                .map((skill, index) => (
                  <SkillCard key={index} skill={skill} delay={index * 0.1} />
                ))}
            </Marquee>
          </motion.div>
        </div>

        {/* Enhanced Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-32 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "11+", label: "Technologies"  },
              { number: "2+", label: "Years Experience" },
              { number: "50+", label: "Projects Built" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.01,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 
                          border border-gray-600/30 rounded-3xl p-8 backdrop-blur-xl 
                          hover:border-gray-400/50 transition-all duration-500 
                          shadow-2xl hover:shadow-3xl relative overflow-hidden cursor-pointer"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                <div className="relative z-10">
                  <div className="text-lg mb-2">{stat.icon}</div>
                  <div
                    className="text-4xl font-black mb-3 
                                 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium tracking-wide">
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
