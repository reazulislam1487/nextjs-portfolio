"use client";
import React, { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  features: string[];
  images: string[];
  live: string;
  code: string;
  keyChallenges: string;
  futureEnhancements: string;
}

const projectsData: Project[] = [
  {
    title: "HavenKeys",
    description:
      "A scalable real estate platform featuring custom role-based access control (RBAC), secure property filtering architectures, and a Stripe-integrated premium listing engine.",
    features: ["Node.js", "Express", "Stripe API", "JWT Auth", "PostgreSQL"],
    images: ["/havenkeys-1.png", "/havenkeys-2.png", "/havenkeys-3.png"],
    live: "https://haven-keys.web.app/",
    code: "https://github.com/reazulislam1487",
    keyChallenges:
      "Engineered secure conditional data updates through protected REST endpoints and managed complex relational schemas for premium listings and user roles.",
    futureEnhancements:
      "Plan to add advanced Redis caching for search optimizations and a robust message queuing system for email notifications.",
  },
  {
    title: "Marathon Zone",
    description:
      "A high-performance full-stack event platform connecting marathon organizers and participants with real-time tracking and registration pipelines.",
    features: ["Node.js", "MongoDB", "Express", "Firebase Auth", "React"],
    images: ["/marathon-1.png", "/marathon-2.png", "/marathon-3.png"],
    live: "https://marathonzonebyreaz.netlify.app/",
    code: "https://github.com/reazulislam1487/marathon-zone",
    keyChallenges:
      "Designed a highly concurrent datastore to handle simultaneous marathon registrations and secure participant data aggregation.",
    futureEnhancements:
      "Implement performance analytics via ELK stack and WebSockets for real-time race leaderboards.",
  },
  {
    title: "Green Circle",
    description:
      "An automated gardening subscription system with real-time slot booking logic, transactional integrity, and a custom CMS backend dashboard.",
    features: ["Express", "MongoDB", "Mongoose", "React", "JWT"],
    images: [
      "/green-circle-1.png",
      "/green-circle-2.png",
      "/green-circle-3.png",
    ],
    live: "https://green-circle-by-reaz.netlify.app",
    code: "https://github.com/reazulislam1487/green-circle",
    keyChallenges:
      "Architected secure, multi-tiered user authorization streams and optimized MongoDB aggregation pipelines for dashboard metrics.",
    futureEnhancements:
      "Migrate to robust microservices and wrap the backend deployment via Docker/Kubernetes.",
  },
  {
    title: "Event Hub",
    description: `A sophisticated MERN stack ecosystem for scalable event creation and management, completely driven by secure RESTful micro-interactions.`,
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

interface ImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number, e?: React.MouseEvent) => {
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

  return (
    <div className={`relative overflow-hidden rounded-t-3xl group/carousel ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex-shrink-0 relative h-full bg-zinc-950">
            <Image
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              className="object-contain"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 
                     text-white p-2 rounded-full transition-all duration-200 opacity-0 
                     group-hover/carousel:opacity-100 z-10 backdrop-blur-sm border border-white/10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 
                     text-white p-2 rounded-full transition-all duration-200 opacity-0 
                     group-hover/carousel:opacity-100 z-10 backdrop-blur-sm border border-white/10"
            aria-label="Next image"
          >
            <FiChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => goToSlide(idx, e)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  idx === currentIndex
                    ? "bg-emerald-500 scale-125 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    : "bg-white/30 hover:bg-white/60"
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
  return (
    <Section id="projects" className="bg-black/20">
      <SectionHeader title="Featured Projects" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4) }}
            whileHover={{ y: -8 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl backdrop-blur-md 
                       shadow-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-500
                       hover:border-zinc-700 relative overflow-hidden group 
                       flex flex-col"
          >
            <div className="relative aspect-video w-full">
              <ImageCarousel
                images={project.images}
                title={project.title}
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <div className="p-8 relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-zinc-400 mb-6 leading-relaxed flex-grow text-[1.05rem]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {project.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-zinc-950/50 border border-zinc-800 text-zinc-300 rounded-lg text-xs font-medium tracking-wide group-hover:border-emerald-500/30 transition-colors duration-300 shadow-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-zinc-800/50">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-zinc-100 text-zinc-950 shadow-md hover:bg-white rounded-xl font-bold transition-all duration-300 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={18} />
                  Live System
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-500 rounded-xl font-semibold transition-all duration-300 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub size={18} />
                  Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
