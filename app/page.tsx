"use client"
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Technologies from "@/components/technologies";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Technologies />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
