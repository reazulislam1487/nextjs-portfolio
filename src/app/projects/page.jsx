"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectsData = [
  {
    title: "HavenKeys",
    description:
      "A real estate app with secure login, property filters, and Stripe-powered premium listing options.",
    features: ["React", "Express", "Stripe", "JWT"],
    images: ["/havenkeys-1.png", "/havenkeys-2.png", "/havenkeys-3.png"],
    live: "https://haven-keys.web.app/",
    code: "https://github.com/reazulislam1487",
  },
  {
    title: "Marathon Zone",
    description:
      "A full-stack event platform connecting marathon organizers and participants with real-time features and dark mode.",
    features: ["React", "Firebase", "Node.js", "MongoDB"],
    images: ["/marathon-1.png", "/marathon-2.png", "/marathon-3.png"],
    live: "https://marathonzonebyreaz.netlify.app/",
    code: "https://github.com/reazulislam1487/marathon-zone",
  },
  {
    title: "Green Circle",
    description:
      "A gardening subscription platform with secure payments, real-time slot booking, and full admin dashboard.",
    features: ["React", "Redux", "Express", "MongoDB"],
    images: [
      "/green-circle-1.png",
      "/green-circle-2.png",
      "/green-circle-3.png",
    ],
    live: "https://green-circle-by-reaz.netlify.app",
    code: "https://github.com/reazulislam1487/green-circle",
  },

  {
    title: "Event Hub",
    description:
      "A real estate app with secure login, property filters, and Stripe-powered premium listing options.",
    features: ["React", "Express", "Stripe", "JWT"],
    images: ["/havenkeys-1.png", "/havenkeys-2.png", "/havenkeys-3.png"],
    live: "https://event-hub-by-reaz.netlify.app",
    code: "https://github.com/reazulislam1487/event-hub-client",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen px-4 max-w-7xl mx-auto sm:px-6 md:px-20 py-14">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl  border-b-2 pb-4 inline-block font-bold text-center mb-10"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-lg p-4 sm:p-6  hover:shadow-xl transition"
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation
              pagination={{ clickable: true }}
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-48 sm:h-56 object-cover rounded mb-4"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2 text-sm">{project.description}</p>
            <ul className="list-disc list-inside text-sm mb-4">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 mb-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                Live Site
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                GitHub
              </a>
            </div>
            <button
              onClick={() => setSelectedProject(project)}
              className="mt-2 px-4 py-2 border rounded hover:opacity-90 transition text-sm"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#ffffff] bg-opacity-50 flex items-center justify-center px-4 py-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-lg w-full max-w-6xl relative overflow-y-auto max-h-[90vh]  shadow-xl"
            >
              <button
                className="absolute top-2 right-3 dark:text-black text-3xl z-50 font-bold"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className="mb-4"
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${selectedProject.title} modal ${idx + 1}`}
                      className="w-full h-48 sm:h-64 object-cover rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h3 className="text-xl dark:text-black font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="mb-2 dark:text-black text-sm">
                {selectedProject.description}
              </p>
              <ul className="list-disc dark:text-black list-inside text-sm mb-4">
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-wrap dark:text-black gap-6">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Live Site
                </a>
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
