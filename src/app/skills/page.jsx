// "use client";
// import React from "react";
// import Marquee from "react-fast-marquee";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGithub,
//   FaHtml5,
//   FaCss3Alt,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiTailwindcss,
//   SiJavascript,
//   SiExpress,
//   SiNextdotjs,
// } from "react-icons/si";

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 /> },
//   { name: "CSS3", icon: <FaCss3Alt /> },
//   { name: "JavaScript", icon: <SiJavascript /> },
//   { name: "React", icon: <FaReact /> },
//   { name: "Next.js", icon: <SiNextdotjs /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//   { name: "Node.js", icon: <FaNodeJs /> },
//   { name: "Express.js", icon: <SiExpress /> },
//   { name: "MongoDB", icon: <SiMongodb /> },
//   { name: "GitHub", icon: <FaGithub /> },
// ];

// export default function Skills() {
//   return (
//     <section className="py-14 min-h-screen px-6 md:px-12 ">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold mb-10 inline-block border-b-2  pb-4 "
//         >
//           My Skills
//         </motion.h2>

//         {/* Marquee Left to Right */}
//         <Marquee speed={60} pauseOnHover gradient={false}>
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-6"
//             >
//               <div className="text-3xl md:text-5xl mb-2 ">{skill.icon}</div>
//               <p className="text-sm font-medium ">{skill.name}</p>
//             </div>
//           ))}
//         </Marquee>

//         {/* Spacing between marquees */}
//         <div className="my-6" />

//         {/* Marquee Right to Left */}
//         <Marquee direction="right" speed={60} pauseOnHover gradient={false}>
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-6"
//             >
//               <div className="text-3xl  md:text-5xl mb-2  ">{skill.icon}</div>
//               <p className="text-sm font-medium ">{skill.name}</p>
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import Marquee from "react-fast-marquee";
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
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "GitHub", icon: <FaGithub /> },
];

export default function Skills() {
  return (
    <section className="py-16 min-h-screen px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-left">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-10"
        >
          Technologies I work with on a regular basis and use in development
        </motion.p>

        {/* Marquee: Left to Right */}
        <Marquee speed={60} pauseOnHover gradient={false}>
          {skills.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              className="flex flex-col items-center justify-center mx-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-4xl md:text-5xl mb-2 "
              >
                {skill.icon}
              </motion.div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </Marquee>

        {/* Divider with animation */}
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="my-10 border-t"
        />

        {/* Marquee: Right to Left */}
        <Marquee direction="right" speed={60} pauseOnHover gradient={false}>
          {skills.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              className="flex flex-col items-center justify-center mx-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-4xl md:text-5xl mb-2 "
              >
                {skill.icon}
              </motion.div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
