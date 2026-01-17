"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const colors = [
  { id: "black", name: "Nero Carbonio", src: "/images/black.jpeg" },
  { id: "red", name: "Rosso Dubai", src: "/images/red.png" },
  { id: "white", name: "Bianco Benny", src: "/images/white.jpeg" }, // Using white image for the "Grey/White" option
  { id: "blue", name: "Blu Tricolore", src: "/images/blue.png" },
];

export default function ColorSelector() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % colors.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + colors.length) % colors.length);
  };

  const goToColor = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-pagani-black relative overflow-hidden flex flex-col items-center">
       {/* Section Header */}
       <div className="text-center mb-16 relative z-10">
          <p className="font-rajdhani text-pagani-gold tracking-[0.3em] text-xs uppercase mb-2">Bespoke</p>
          <h3 className="font-orbitron text-4xl md:text-5xl text-white">SELECT YOUR <span className="text-pagani-gold text-glow">SPEC</span></h3>
       </div>

       {/* Main Visual Carousel */}
       <div className="relative w-full max-w-6xl h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
          
          {/* Navigation Arrows */}
          <button onClick={handlePrev} className="absolute left-4 md:left-12 z-20 p-4 border border-white/10 rounded-full hover:border-pagani-gold hover:bg-pagani-gold/10 transition-all group">
             <svg className="w-6 h-6 text-white group-hover:text-pagani-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
             </svg>
          </button>
          
          <button onClick={handleNext} className="absolute right-4 md:right-12 z-20 p-4 border border-white/10 rounded-full hover:border-pagani-gold hover:bg-pagani-gold/10 transition-all group">
             <svg className="w-6 h-6 text-white group-hover:text-pagani-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
             </svg>
          </button>

          {/* Car Image Transition */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full flex items-center justify-center p-8"
            >
               <div className="relative w-full h-full">
                  <Image 
                    src={colors[currentIndex].src} 
                    alt={colors[currentIndex].name}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
               </div>
            </motion.div>
          </AnimatePresence>
       </div>

       {/* Color Name & Toggles */}
       <div className="relative z-10 flex flex-col items-center gap-8 mt-8">
           <motion.div
             key={colors[currentIndex].name}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="text-center"
           >
              <h4 className="font-orbitron text-2xl md:text-3xl text-white tracking-wider">{colors[currentIndex].name}</h4>
           </motion.div>

           <div className="flex gap-4 p-2 glass-panel rounded-full">
              {colors.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => goToColor(i)}
                    className={`nav-dot w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                        i === currentIndex 
                            ? "bg-pagani-gold scale-125 shadow-[0_0_10px_rgba(212,175,55,0.6)]" 
                            : "bg-white/20 hover:bg-white/50"
                    }`}
                    aria-label={`Select ${c.name}`}
                  />
              ))}
           </div>
       </div>
    </section>
  );
}
