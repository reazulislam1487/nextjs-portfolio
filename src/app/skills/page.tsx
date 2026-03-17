"use client";
import React from "react";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import SkillCard from "../components/ui/SkillCard";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaQrcode,
  FaBolt,
  FaAws,
  FaRobot,
  FaNetworkWired
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiSocketdotio,
} from "react-icons/si";
import { TbApi, TbTopologyStar3, TbLock, TbSchema } from "react-icons/tb";
import { FiRefreshCw } from "react-icons/fi";

interface SkillData {
  name: string;
  icon: React.ReactNode;
  color: string;
  iconColor: string;
}

const frontendSkills: SkillData[] = [
  {
    name: "React",
    icon: <FaReact />,
    color: "from-cyan-400/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "from-zinc-300/20 to-zinc-600/20",
    iconColor: "text-zinc-300",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "from-teal-400/20 to-cyan-500/20",
    iconColor: "text-teal-400",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "from-yellow-400/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
  },
];

const backendSkills: SkillData[] = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "from-green-500/20 to-green-700/20",
    iconColor: "text-green-500",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "from-gray-600/20 to-gray-800/20",
    iconColor: "text-gray-300",
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
    color: "from-red-500/20 to-red-700/20",
    iconColor: "text-red-500",
  },
  {
    name: "REST APIs",
    icon: <TbApi />,
    color: "from-cyan-500/20 to-blue-600/20",
    iconColor: "text-cyan-400",
  },
  {
    name: "Authentication",
    icon: <TbLock />,
    color: "from-purple-500/20 to-pink-600/20",
    iconColor: "text-purple-400",
  },
];

const architectureDatabaseSkills: SkillData[] = [
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "from-green-600/20 to-green-800/20",
    iconColor: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "from-blue-500/20 to-indigo-600/20",
    iconColor: "text-blue-500",
  },
  {
    name: "SQL",
    icon: <FaDatabase />,
    color: "from-orange-500/20 to-rose-600/20",
    iconColor: "text-orange-500",
  },
  {
    name: "Database Design",
    icon: <TbSchema />,
    color: "from-yellow-500/20 to-amber-600/20",
    iconColor: "text-yellow-500",
  },
  {
    name: "System Design",
    icon: <TbTopologyStar3 />,
    color: "from-zinc-400/20 to-zinc-600/20",
    iconColor: "text-zinc-400",
  },
  {
    name: "API Architecture",
    icon: <TbApi />,
    color: "from-emerald-400/20 to-teal-600/20",
    iconColor: "text-emerald-400",
  },
];

const advancedTechnologies: SkillData[] = [
  {
    name: "Socket.IO",
    icon: <SiSocketdotio />,
    color: "from-zinc-200/20 to-zinc-400/20",
    iconColor: "text-zinc-200",
  },
  {
    name: "WebRTC",
    icon: <FaNetworkWired />,
    color: "from-blue-400/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "QR Code Systems",
    icon: <FaQrcode />,
    color: "from-zinc-400/20 to-zinc-600/20",
    iconColor: "text-zinc-400",
  },
  {
    name: "Real-time Apps",
    icon: <FaBolt />,
    color: "from-yellow-400/20 to-orange-500/20",
    iconColor: "text-yellow-400",
  },
  {
    name: "CI/CD",
    icon: <FiRefreshCw />,
    color: "from-emerald-400/20 to-cyan-500/20",
    iconColor: "text-emerald-400",
  },
  {
    name: "AWS Basics",
    icon: <FaAws />,
    color: "from-orange-400/20 to-yellow-500/20",
    iconColor: "text-orange-400",
  },
  {
    name: "AI Tools",
    icon: <FaRobot />,
    color: "from-purple-400/20 to-fuchsia-500/20",
    iconColor: "text-purple-400",
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-black/80">
      <SectionHeader 
        title="My Skills"
        subtitle="Cutting-edge technologies and frameworks I leverage to craft exceptional digital experiences and scalable solutions"
      />

        {/* Frontend Skills Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-200 tracking-tight">Frontend Development</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend Skills Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-200 tracking-tight">Backend Development</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Architecture & Databases Skills Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-200 tracking-tight">Architecture & Databases</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {architectureDatabaseSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Advanced Technologies Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-200 tracking-tight">Advanced Technologies</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {advancedTechnologies.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Simplified Bottom Stats - Monochromatic Tech styling */}
        <div className="mt-12 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { number: "11+", label: "Technologies Mastered" },
              { number: "1+", label: "Years Experience" },
              { number: "50+", label: "Repositories" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-zinc-900/40
                            border border-zinc-800/80 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl 
                            hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 
                            shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.03)] relative overflow-hidden cursor-pointer text-center"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>

                <div className="relative z-10">
                  <div
                    className="text-3xl md:text-4xl font-black mb-2 md:mb-3 
                                 text-white"
                  >
                    {stat.number}
                  </div>
                  <div className="text-zinc-400 text-sm md:text-base font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
}
