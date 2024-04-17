"use client"
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Technologies from "@/components/technologies";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress }=useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
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
