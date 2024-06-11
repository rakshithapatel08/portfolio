import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Herobanner from "@/components/Herobanner";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
       <Navbar/>
       <Herobanner/>
       <Projects/>
       {/* about section */}
       <Technologies/>
       <Works/>       
       <Contact/>
    </>
  );
}
