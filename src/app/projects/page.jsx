import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Green Circle",
      description:
        "Full-stack gardening subscription app with slot management, Stripe payments, and filtering.",
      live: "https://green-circle.vercel.app",
      github: "https://github.com/reazulislam/green-circle",
    },
    {
      title: "Marathon Zone",
      description:
        "Marathon event platform with registration, search, dark mode, and admin dashboard.",
      live: "https://marathon-zone.vercel.app",
      github: "https://github.com/reazulislam/marathon-zone",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
