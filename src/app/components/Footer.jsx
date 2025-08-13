"use client";
import React from "react";
import { motion } from "framer-motion";





export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 md:px-20  bg-gradient-to-t from-black via-gray-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gray-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-black/95"></div>

      <div className="relative z-10">

       

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
      </div>
    </footer>
  );
}
