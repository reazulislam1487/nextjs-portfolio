// app/layout.jsx    ← SERVER component, no "use client"
import "./globals.css";
import Providers from "./components/Providers";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Next.js 15 Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
