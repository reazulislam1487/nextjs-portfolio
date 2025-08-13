"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 md:px-20 bg-black backdrop-blur-xl  ">
      {/* Bottom Bar */}
      <div className="border-t border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center text-sm"
            >
              © {currentYear} Reazul Islam Reaz. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
