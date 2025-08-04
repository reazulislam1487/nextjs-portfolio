import "./globals.css";
import Providers from "./components/Providers";
import Footer from "./components/Footer";
import Education from "./education/page";

export const metadata = {
  title: "Reazul Islam Reaz",
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
