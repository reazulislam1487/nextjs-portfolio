"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 md:px-20 py-14 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold border-b-2 border-black dark:border-white pb-4 mb-12 inline-block">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info with Icons */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Feel free to reach out for collaborations, freelance work, or just
              a friendly chat!
            </p>

            <div className="space-y-4 text-base text-gray-800 dark:text-gray-200">
              <p className="flex items-center gap-3">
                <FiMail className="text-xl" />
                <span>reazulislam1487@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <FiMapPin className="text-xl" />
                <span>Bangladesh (Remote Available)</span>
              </p>

              <div className="flex items-center gap-5 pt-4 text-xl">
                <a
                  href="https://github.com/reazulislamreaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/reazulislamreaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 mt-1 border border-black dark:border-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 mt-1 border border-black dark:border-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 mt-1 border border-black dark:border-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
