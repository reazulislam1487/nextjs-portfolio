import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Hi, I’m Reazul Islam Reaz</h1>
      <p className="text-lg text-[#718096] mb-6">
        A MERN Stack Developer passionate about building modern web apps.
      </p>
      <a
        href="/projects"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        See My Projects
      </a>
    </section>
  );
}
