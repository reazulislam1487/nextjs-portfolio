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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Education></Education>
          <Contact></Contact>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
