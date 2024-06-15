import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rakshitha Patel",
  description: "Portfolio website- Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel='icon' href='/logo-image-rp.png' /></head>
      <ThemeProvider defaultTheme="system">
      <body className="ml-40 mr-40 bg-black">{children}</body>
      <Footer/>
      </ThemeProvider>
    </html>
  );
}
