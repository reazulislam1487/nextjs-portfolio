"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zybi9ip",
        "template_mcd3o3c",
        form.current,
        "vh3xBQbYnuH1mKR3J"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#000000",
            timer: 2000,
          });
          form.current.reset();
        },
        (error) => {
          console.error("Email error:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again later.",
            confirmButtonColor: "#DC2626",
          });
        }
      );
  };

  return (
    <section
      className="min-h-screen px-4 sm:px-6 md:px-20 py-14 transition-colors relative overflow-hidden
                 bg-gradient-to-br from-slate-950 via-gray-900 to-black"
    >
  

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 relative inline-block text-center md:text-left">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
              Contact Me
            </span>
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/25" />
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mt-4 max-w-2xl font-light text-center md:text-left mx-auto md:mx-0">
            Let's connect and discuss how we can work together on your next
            project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="space-y-8 w-full max-w-xl mx-auto md:mx-0"
          >
            <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 border border-gray-600/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-gray-500/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <p className="text-lg text-gray-300 leading-relaxed mb-8 font-light">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development. Feel free to reach out!
                </p>

                <div className="space-y-6 text-base">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-purple-500/40 transition-all duration-300 group/item cursor-pointer">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 group-hover/item:bg-purple-500/20 transition-colors duration-300">
                      <FiMail className="text-xl text-purple-400 group-hover/item:text-purple-300" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                      reazulislam1487@gmail.com
                    </span>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-green-500/40 transition-all duration-300 group/item cursor-pointer">
                    <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 group-hover/item:bg-green-500/20 transition-colors duration-300">
                      <FaWhatsapp className="text-xl text-green-400 group-hover/item:text-green-300" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                      +8801770807782
                    </span>
                  </div>

                  <div
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300 group/item cursor-pointer"
                  >
                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 group-hover/item:bg-cyan-500/20 transition-colors duration-300">
                      <FiMapPin className="text-xl text-cyan-400 group-hover/item:text-cyan-300" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                      Faridpur, Bangladesh (Remote Available)
                    </span>
                  </div>

                  <div className="flex items-center gap-6 pt-6">
                    <span className="text-gray-400 font-medium">
                      Follow me:
                    </span>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://github.com/reazulislam1487"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-gray-400/50 hover:bg-gray-600/40 transition-all duration-300 text-gray-400 hover:text-white shadow-lg hover:shadow-xl"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/reazulislam1487"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600/20 rounded-xl border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-300 text-blue-400 hover:text-blue-300 shadow-lg hover:shadow-xl"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="w-full max-w-xl mx-auto md:mx-0 bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 border border-gray-600/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-gray-500/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send me a message
                </h3>
                <p className="text-gray-400 text-sm">
                  I'll get back to you as soon as possible
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:border-gray-500/70 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:border-gray-500/70 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:border-gray-500/70 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn hover:from-purple-500 hover:via-purple-600 hover:to-cyan-500"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500
                               bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%]"
                  ></div>

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
