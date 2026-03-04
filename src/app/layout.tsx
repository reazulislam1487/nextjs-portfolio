import { type Metadata } from "next";
import "./globals.css";
import Providers from "./components/Providers";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Reazul Islam Reaz | Full-Stack Backend-Focused Engineer",
  description: "Personal portfolio website of Reazul Islam Reaz, specializing in scalable backend systems and high-performance full-stack applications.",
  keywords: [
    "Reazul Islam Reaz",
    "Reazul Islam",
    "Reazul Reaz",
    "Reaz Reaz",
    "Reaz",
    "full stack developer",
    "backend developer",
    "backend engineer",
    "MERN stack developer",
    "Node.js engineer",
    "NestJS developer",
    "PostgreSQL",
    "MongoDB",
    "System Design Engineer"
  ],
  authors: [{ name: "Reazul Islam Reaz" }],
  verification: {
    google: "R3xCKBJomUGl_i1gminkMaXYRPhDvhGgfV90n96YFqw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black selection:bg-emerald-500/30 selection:text-emerald-200">
        <Providers>
          <div className="glass-gradient" />
          <div className="glass-pattern" />
          
          <div className="relative z-10 flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
