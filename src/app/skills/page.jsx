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
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "from-blue-500/20 to-blue-700/20",
    iconColor: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "from-yellow-400/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "from-blue-400/20 to-blue-600/20",
    iconColor: "text-blue-300",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "from-cyan-400/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "from-gray-300/20 to-gray-600/20",
    iconColor: "text-gray-300",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "from-teal-400/20 to-cyan-500/20",
    iconColor: "text-teal-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "from-green-500/20 to-green-700/20",
    iconColor: "text-green-400",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "from-gray-600/20 to-gray-800/20",
    iconColor: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "from-green-600/20 to-green-800/20",
    iconColor: "text-green-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "from-purple-500/20 to-gray-700/20",
    iconColor: "text-purple-300",
  },
];

// Simplified SkillCard Component
const SkillCard = ({ skill }) => {
  return (
    <div className="group relative w-full h-40 cursor-pointer">
      {/* Simplified background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 
                      rounded-2xl backdrop-blur-xl border border-gray-600/30 
                      group-hover:border-gray-400/50 transition-colors duration-300 
                      shadow-2xl overflow-hidden"
      >
        {/* Hover gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
        <div
          className={`text-5xl md:text-6xl mb-4 ${skill.iconColor} 
                       transition-all duration-300 group-hover:scale-110`}
        >
          {skill.icon}
        </div>

        <h3
          className="text-sm md:text-base font-bold text-gray-300 group-hover:text-white 
                       transition-colors duration-300 text-center tracking-wide"
        >
          {skill.name}
        </h3>

        {/* Simple progress indicator */}
        <div
          className={`mt-3 h-0.5 w-0 group-hover:w-16 bg-gradient-to-r ${skill.color.replace(
            "/20",
            "/60"
          )} 
                        rounded-full transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="  relative overflow-hidden py-20 px-4 sm:px-6 md:px-20
                       bg-gradient-to-br from-slate-950 via-gray-900 to-black"
    >
      {/* Simplified static background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                       rounded-full blur-3xl opacity-20"
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-blue-500/10 
                       rounded-full blur-3xl opacity-15"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 
                       rounded-full blur-3xl opacity-10"
        />
      </div>

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
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Simplified Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-5xl font-black mb-2 relative inline-block">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
              My Skills
            </span>
          </h2>

          <p className="text-lg text-center md:text-xl text-gray-300 leading-relaxed font-light mt-6">
            Cutting-edge technologies and frameworks I leverage to craft
            exceptional digital experiences and scalable solutions
          </p>
        </div>

        {/* Skills Grid - No animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Simplified Bottom Stats */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { number: "11+", label: "Technologies" },
              { number: "1+", label: "Years Experience" },
              { number: "50+", label: "Projects Built" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 
                            border border-gray-600/30 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl 
                            hover:border-gray-400/50 transition-colors duration-300 
                            shadow-2xl hover:shadow-3xl relative overflow-hidden cursor-pointer text-center"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
