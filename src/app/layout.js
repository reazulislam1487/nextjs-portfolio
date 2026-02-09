import "./globals.css";
import Providers from "./components/Providers";
import Footer from "./components/Footer";
import Education from "./education/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export const metadata = {
  title: "Reazul Islam Reaz",
  description: "Personal portfolio website of Reazul Islam Reaz",
  keywords: [
    // Name variations
    "Reazul Islam Reaz",
    "Reazul Islam",
    "Reazul Reaz",
    "Reaz Reaz",
    "Reaz",
    "Md Reazul Islam",
    "Md Reazul Islam Reaz",
    "Riazul Islam Riaz",

    // Professional identity
    "full stack developer",
    "full stack web developer",
    "backend developer",
    "backend engineer",
    "web developer",
    "software developer",

    // Tech focused
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Express.js developer",
    "MongoDB developer",

    // Portfolio / branding
    "developer portfolio",
    "personal portfolio website",
    "software engineer portfolio",
    "web development portfolio",
  ],
  authors: [{ name: "Reazul Islam Reaz" }],
  verification: {
    google: "R3xCKBJomUGl_i1gminkMaXYRPhDvhGgfV90n96YFqw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <About></About>
          <Skills></Skills>
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
