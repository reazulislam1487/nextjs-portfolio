"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectsData = [
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
    live: "https://green-circle.vercel.app",
    code: "https://github.com/reazulislamreaz/green-circle",
  },
  {
    title: "Marathon Zone",
    description:
      "A full-stack event platform connecting marathon organizers and participants with real-time features and dark mode.",
    features: ["React", "Firebase", "Node.js", "MongoDB"],
    images: ["/marathon-1.png", "/marathon-2.png", "/marathon-3.png"],
    live: "https://marathon-zone.web.app",
    code: "https://github.com/reazulislamreaz/marathon-zone",
  },
  {
    title: "HavenKeys",
    description:
      "A real estate app with secure login, property filters, and Stripe-powered premium listing options.",
    features: ["React", "Express", "Stripe", "JWT"],
    images: ["/havenkeys-1.png", "/havenkeys-2.png", "/havenkeys-3.png"],
    live: "https://havenkeys.vercel.app",
    code: "https://github.com/reazulislamreaz/havenkeys",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 md:px-20 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
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
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {project.description}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-4">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="flex gap-4 mb-4">
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
              className="mt-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-90 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-2xl relative">
            <button
              className="absolute top-2 right-3 text-xl text-gray-600 hover:text-black dark:hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
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
                    className="w-full h-48 object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              {selectedProject.description}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
              {selectedProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="flex gap-4">
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
          </div>
        </div>
      )}
    </section>
  );
}
