"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import ZondaScrollCanvas from "@/components/ZondaScrollCanvas";
import ZondaExperience from "@/components/ZondaExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import VibeSection from "@/components/VibeSection";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the 600vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-pagani-black min-h-screen selection:bg-pagani-gold selection:text-black">
      <Navbar />

      {/* MASTER SCROLL SEQUENCE (Locked for 600vh) */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
           <ZondaScrollCanvas scrollYProgress={scrollYProgress} totalFrames={240} imageFolderPath="/images/zonda-sequence" />
           <ZondaExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* REST OF SITE (Scrolls naturally after sequence) */}
      <div className="relative z-20 bg-pagani-black border-t border-white/10">
         <SpecsGrid />
         <Features />
         <VibeSection />
         <Footer />
      </div>
    </main>
  );
}
