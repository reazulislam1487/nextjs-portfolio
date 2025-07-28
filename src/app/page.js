"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-[#F9F9F6] min-h-[90vh]">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
          Hi, I’m <span className="text-blue-600">Reazul Islam Reaz</span>
        </h1>
        <p className="text-lg text-[#718096] mb-6">
          A MERN Stack Developer passionate about building modern and scalable
          web applications.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6 text-blue-600 text-2xl">
          <a
            href="https://github.com/reazulislam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/reazulislamreaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:reazulislam1487@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <a
          href="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          See My Projects
        </a>
        <a
          href="/resume.pdf"
          className="inline-block ml-4 bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          download
        >
          Download Resume
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="/reazul-profile1.jpg"
            alt="Reazul Islam Reaz"
            // layout="fill"
            // objectFit="cover"
            // priority
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>
      </motion.div>
    </section>
  );
}
