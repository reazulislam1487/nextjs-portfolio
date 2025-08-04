"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

const projectsData = [
  {
    title: "HavenKeys",
    description:
      "A real estate app with secure login, property filters, and Stripe-powered premium listing options.",
    features: ["React", "Express", "Stripe", "JWT"],
    images: ["/havenkeys-1.png", "/havenkeys-2.png", "/havenkeys-3.png"],
    live: "https://haven-keys.web.app/",
    code: "https://github.com/reazulislam1487",
    keyChallenges:
      "Faced challenges implementing custom authentication with role-based access control, verifying user roles on the backend, managing conditional modals, ensuring responsiveness across devices, and securing data update modals.",
    futureEnhancements:
      "Plan to add performance analytics, support for multiple payment methods, and push notifications using service workers.",
  },
  {
    title: "Marathon Zone",
    description:
      "A full-stack event platform connecting marathon organizers and participants with real-time features and dark mode.",
    features: ["React", "Firebase", "Node.js", "MongoDB"],
    images: ["/marathon-1.png", "/marathon-2.png", "/marathon-3.png"],
    live: "https://marathonzonebyreaz.netlify.app/",
    code: "https://github.com/reazulislam1487/marathon-zone",
    keyChallenges:
      "Managing authentication and conditional modals, ensuring responsiveness across devices, and implementing a secure data update modal.",
    futureEnhancements:
      "Add admin dashboard, performance analytics, and push notifications using service workers.",
  },
  {
    title: "Green Circle",
    description:
      "A gardening subscription platform with secure payments, real-time slot booking, and full admin dashboard.",
    features: ["JavaScript", "React", "Express", "MongoDB"],
    images: [
      "/green-circle-1.png",
      "/green-circle-2.png",
      "/green-circle-3.png",
    ],
    live: "https://green-circle-by-reaz.netlify.app",
    code: "https://github.com/reazulislam1487/green-circle",
    keyChallenges:
      "Implementing secure user roles with JWT, designing a clean reusable UI theme, and structuring a full-stack MERN app efficiently.",
    futureEnhancements:
      "Integrate Stripe for payments, build a mobile-friendly PWA, and enhance CMS-like admin tools.",
  },
  {
    title: "Event Hub",
    description: `Event Hub is a full-stack MERN app for creating, managing, and joining events—designed to be secure, responsive, and user-friendly for organizers and attendees alike.`,
    features: ["React", "Express", "Custom Auth", "JWT"],
    images: ["/event-hub.png", "/event-hub1.png", "/event-hub2.png"],
    live: "https://event-hub-by-reaz.netlify.app",
    code: "https://github.com/reazulislam1487/event-hub-client",
    keyChallenges:
      "Faced challenges implementing a custom authentication system, managing conditional modals, ensuring full responsiveness across all devices, and securing sensitive data updates through protected modals.",
    futureEnhancements:
      "Add admin dashboard, performance analytics, and push notifications using service workers.",
  },
];

// Simplified Carousel Component
const ImageCarousel = ({ images, title, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index, e) => {
    e?.stopPropagation();
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/600x400/1f2937/9ca3af?text=${encodeURIComponent(
      title
    )}`;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg group/carousel ${className}`}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <img
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              className="w-full h-full object-cover"
              onError={handleImageError}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 
                     text-white p-2 rounded-full transition-colors duration-200 opacity-0 
                     group-hover/carousel:opacity-100 z-10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 
                     text-white p-2 rounded-full transition-colors duration-200 opacity-0 
                     group-hover/carousel:opacity-100 z-10"
            aria-label="Next image"
          >
            <FiChevronRight size={16} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => goToSlide(idx, e)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  idx === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleViewDetails = (project, e) => {
    e?.stopPropagation();
    setSelectedProject(project);
  };

  const closeModal = (e) => {
    e?.stopPropagation();
    setSelectedProject(null);
  };

  // const handleModalBackdropClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     setSelectedProject(null);
  //   }
  // };

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-20 py-14 transition-colors relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* Simplified static background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                       rounded-full blur-3xl opacity-20"
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-blue-500/10 
                       rounded-full blur-3xl opacity-15"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] 
                     bg-[size:50px_50px] opacity-60"
      ></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-black mb-12 relative inline-block">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
            Featured Projects
          </span>
          {/* Static underline */}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/60 via-gray-800/80 to-black/90 
                         border border-gray-600/30 rounded-3xl backdrop-blur-xl 
                         shadow-2xl hover:shadow-3xl transition-all duration-300
                         hover:border-gray-500/50 relative overflow-hidden group cursor-pointer
                         hover:scale-[1.02]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <div className="relative">
                <ImageCarousel
                  images={project.images}
                  title={project.title}
                  className="h-56 sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={16} />
                    Live Site
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                </div>

                {/* <button
                  onClick={(e) => handleViewDetails(project, e)}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 
                           text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                >
                  View Details
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Simplified Modal */}
        {/* <AnimatePresence>
          {selectedProject && (
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6"
              onClick={handleModalBackdropClick}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 
                         border border-gray-600/30 rounded-3xl backdrop-blur-xl shadow-2xl 
                         w-full max-w-4xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <ImageCarousel
                    images={selectedProject.images}
                    title={selectedProject.title}
                    className="h-64 sm:h-80"
                  />

                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 
                             rounded-full transition-colors duration-200 focus:outline-none focus:ring-4 
                             focus:ring-white/20 z-20"
                    aria-label="Close modal"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                <div className="p-8 overflow-y-auto max-h-[50vh]">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6 text-gray-300">
                    <div className="bg-gray-800/50 border border-gray-700/30 rounded-xl p-6">
                      <h4 className="font-bold text-lg text-white mb-3">
                        🚀 Key Challenges
                      </h4>
                      <p className="leading-relaxed">
                        {selectedProject.keyChallenges}
                      </p>
                    </div>

                    <div className="bg-gray-800/50 border border-gray-700/30 rounded-xl p-6">
                      <h4 className="font-bold text-lg text-white mb-3">
                        💡 Future Enhancements
                      </h4>
                      <p className="leading-relaxed">
                        {selectedProject.futureEnhancements}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-700/50">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-700 
                               hover:from-cyan-500 hover:to-cyan-600 text-white font-semibold py-3 px-6 
                               rounded-xl transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={18} />
                      Visit Live Site
                    </a>
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 
                               hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 
                               rounded-xl transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={18} />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </motion.div>
    </section>
  );
}
