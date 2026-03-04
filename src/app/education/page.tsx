"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";

interface EducationItem {
  degree: string;
  department: string;
  institution: string;
  duration: string;
  status: string;
  icon: string;
  accentColor: string;
  glowColor: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Social Science (Honors)",
    department: "Department of Political Science",
    institution: "National University, Bangladesh",
    duration: "Expected Graduation: 2026",
    status: "IN PROGRESS",
    icon: "🎓",
    accentColor: "bg-blue-500/10 border-blue-500/20",
    glowColor: "group-hover:shadow-blue-500/10"
  },
  {
    degree: "MERN Stack Web Development",
    department: "Full-Stack Development Program",
    institution: "Programming Hero",
    duration: "2024 – Present",
    status: "ACTIVE",
    icon: "💻",
    accentColor: "bg-emerald-500/10 border-emerald-500/20",
    glowColor: "group-hover:shadow-emerald-500/10"
  }
];

export default function Education() {
  return (
    <Section id="education" className="bg-black/60 relative">
      <SectionHeader 
        title="Education" 
        subtitle="My academic journey and professional development in technology" 
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Enhanced Education Info */}
        <div className="space-y-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group relative bg-zinc-900/40 
                        border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-md 
                        hover:border-zinc-700 transition-all duration-500 
                        shadow-xl hover:shadow-2xl ${item.glowColor} overflow-hidden`}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${item.accentColor}`}>
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${item.accentColor}`}
                  >
                    {item.status}
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-50 transition-colors duration-300"
                >
                  {item.degree}
                </h3>
                <p className="text-zinc-300 text-lg mb-2 font-medium">
                  {item.department}
                </p>
                <p className="text-zinc-400 text-sm mb-1">
                  {item.institution}
                </p>
                <p className="text-zinc-500 text-sm font-semibold">
                  {item.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Enhanced Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center items-center relative h-full"
        >
          <div className="relative group">
            <div
              className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent 
                           rounded-3xl blur-2xl transform scale-110 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500"
            ></div>

            <div
              className="relative bg-zinc-900/20 
                           border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-md
                           shadow-xl group-hover:shadow-2xl transition-all duration-500
                           group-hover:border-zinc-700"
            >
              <Image
                src="/image.png"
                alt="Education Illustration"
                width={500}
                height={500}
                className="max-w-xs md:max-w-md w-full h-auto object-contain 
                         filter group-hover:brightness-110 transition-all duration-300
                         drop-shadow-xl"
              />

              {/* Decorative elements */}
              <div
                className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-600 
                             rounded-full animate-pulse shadow-lg shadow-emerald-500/50"
              ></div>
              <div
                className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-zinc-400 to-zinc-600 
                             rounded-full animate-pulse shadow-lg shadow-zinc-500/50 delay-75"
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
