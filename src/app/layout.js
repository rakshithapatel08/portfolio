import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rakshitha Patel",
  description: "Portfolio website- Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-track-black scrollbar-thumb-white">
      <head><link rel='icon' href='/logo-image-rp.png' /></head>
      <ThemeProvider defaultTheme="system">
      <body className="md:ml-40 md:mr-40 ml-3 mr-3 bg-black">{children}<Toaster /></body>
      <Footer/>
      </ThemeProvider>
    </html>
  );
}
