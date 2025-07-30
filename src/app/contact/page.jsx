"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen  px-6 md:px-20 py-14 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold border-b-2 pb-4 mb-6 inline-block">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info with Icons */}
          <div className="space-y-6">
            <p className="text-lg ">
              Feel free to reach out for collaborations, freelance work, or just
              a friendly chat!
            </p>

            <div className="space-y-4 text-base ">
              <p className="flex items-center gap-3">
                <FiMail className="text-xl" />
                <span>reazulislam1487@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <FaWhatsapp className="text-xl " />
                <span>+8801770807782</span>
              </p>
              <p className="flex items-center gap-3">
                <FiMapPin className="text-xl" />
                <span>Faridpur, Bangladesh (Remote Available)</span>
              </p>

              <div className="flex items-center gap-5 pt-4 text-xl">
                <a
                  href="https://github.com/reazulislam1487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/reazulislam1487"
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
          <form className="space-y-6 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 mt-1 border bg-transparent rounded-md focus:outline-none focus:ring-2 "
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
                className="w-full px-4 py-2 mt-1 border bg-transparent rounded-md focus:outline-none focus:ring-2 "
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
                className="w-full px-4 py-2 mt-1 border bg-transparent rounded-md focus:outline-none focus:ring-2 "
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3  cursor-pointer dark:bg-black dark:text-white rounded-xl hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
