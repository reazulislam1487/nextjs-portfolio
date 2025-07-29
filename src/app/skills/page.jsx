// "use client";
// import React from "react";
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
//     <section className=" py-14 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold mb-10 inline-block border-b-2 pb-4"
//         >
//           My Skills
//         </motion.h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1, duration: 0.3 }}
//               className="flex flex-col items-center gap-2"
//             >
//               <div className="text-4xl">{skill.icon}</div>
//               <p className="text-sm font-medium">{skill.name}</p>
//             </motion.div>
//           ))}
//         </div>
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
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
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
    <section className="py-14 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 inline-block border-b-2  pb-4 "
        >
          My Skills
        </motion.h2>

        {/* Marquee Left to Right */}
        <Marquee speed={60} pauseOnHover gradient={false}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-6"
            >
              <div className="text-5xl mb-2 ">{skill.icon}</div>
              <p className="text-sm font-medium ">{skill.name}</p>
            </div>
          ))}
        </Marquee>

        {/* Spacing between marquees */}
        <div className="my-6" />

        {/* Marquee Right to Left */}
        <Marquee direction="right" speed={60} pauseOnHover gradient={false}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-6"
            >
              <div className="text-5xl mb-2  ">{skill.icon}</div>
              <p className="text-sm font-medium ">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
