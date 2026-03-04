import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
  iconColor: string;
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative w-full h-40 cursor-pointer"
    >
      {/* Simplified background */}
      <div
        className="absolute inset-0 bg-zinc-900/40 
                      rounded-2xl backdrop-blur-md border border-zinc-800/80 
                      group-hover:border-zinc-700 transition-all duration-300 
                      shadow-xl group-hover:shadow-[0_0_20px_rgba(16,185,129,0.03)] overflow-hidden"
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
                       transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2`}
        >
          {skill.icon}
        </div>

        <h3
          className="text-sm md:text-base font-medium text-zinc-400 group-hover:text-zinc-200 
                       transition-colors duration-300 text-center tracking-wide"
        >
          {skill.name}
        </h3>

        {/* Simple progress indicator */}
        <div
          className={`mt-3 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r ${skill.color.replace(
            "/20",
            "/80"
          )} 
                        rounded-full transition-all duration-500 ease-out opacity-0 group-hover:opacity-100`}
        />
      </div>
    </motion.div>
  );
}
