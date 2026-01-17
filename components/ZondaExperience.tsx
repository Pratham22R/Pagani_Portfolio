"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { carData } from "@/data/carData";

interface ZondaExperienceProps {
  scrollYProgress: MotionValue<number>;
}

export default function ZondaExperience({ scrollYProgress }: ZondaExperienceProps) {
  // --- TRANSITIONS ---

  // Hero: 0 - 0.2 (Fade In), 0.2 - 0.3 (Fade Out)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [1, 1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Design: 0.3 - 0.4 (In), 0.6 - 0.7 (Out)
  const designOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const designY = useTransform(scrollYProgress, [0.3, 0.7], [50, -50]);

  // Engine: 0.7 - 0.8 (In), 0.95 - 1.0 (Out)
  const engineOpacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 0]);
  const engineX = useTransform(scrollYProgress, [0.7, 1], [100, 0]); // Slide in from right

  return (
    <div className="fixed inset-0 z-10 pointer-events-none flex flex-col justify-center w-full h-full">
      
      {/* === PHASE 1: HERO === */}
      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-24 items-start text-left"
      >
        <div className="overflow-hidden">
            <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-pagani-gold font-rajdhani tracking-[0.3em] text-sm font-medium mb-4"
            >
              AUTOMOTIVE ART
            </motion.h2>
        </div>

        <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-orbitron font-medium text-5xl md:text-8xl text-white mb-6 leading-none"
        >
          {carData.hero.title.toUpperCase()}
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-rajdhani text-lg md:text-xl text-gray-400 tracking-wider max-w-md mb-8"
        >
          {carData.hero.subtitle}
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-6"
        >
            <div className="flex flex-col">
                <span className="text-2xl font-rajdhani text-white">{carData.hero.price}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Base Price</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
             <p className="text-xs text-pagani-gold tracking-widest uppercase opacity-80">Scroll to Explore</p>
        </motion.div>
      </motion.div>

      {/* === PHASE 2: DESIGN === */}
      <motion.div 
        style={{ opacity: designOpacity, y: designY }}
        className="absolute inset-0 flex items-center justify-start px-8 md:px-24"
      >
        <div className="max-w-2xl bg-black/40 backdrop-blur-sm p-8 border-l-2 border-pagani-gold">
          <h2 className="text-pagani-gold font-orbitron text-4xl md:text-6xl mb-6">
            {carData.design.title.toUpperCase()}
          </h2>
          <p className="font-rajdhani text-lg md:text-2xl leading-relaxed text-gray-200 mb-8">
            {carData.design.text}
          </p>
          <div className="flex gap-6">
            {carData.design.specs.map((spec, i) => (
              <div key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded">
                 <span className="text-sm font-rajdhani text-pagani-gold tracking-wider">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* === PHASE 3: ENGINE === */}
      <motion.div 
        style={{ opacity: engineOpacity, x: engineX }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-24"
      >
         <div className="max-w-xl text-right">
            <h2 className="text-pagani-gold font-orbitron text-4xl md:text-6xl mb-2">
                {carData.engine.title.toUpperCase()}
            </h2>
            <p className="text-gray-400 font-rajdhani text-xl mb-8 tracking-widest uppercase">
                {carData.engine.subtitle}
            </p>

            <div className="grid grid-cols-1 gap-6">
                {carData.engine.specs.map((spec, i) => (
                    <div key={i} className="border-b border-white/20 pb-2 flex justify-between items-end gap-x-12">
                         <span className="text-gray-500 font-rajdhani uppercase tracking-wider text-sm">{spec.label}</span>
                         <span className="text-3xl font-orbitron text-white">{spec.value}</span>
                    </div>
                ))}
            </div>
         </div>
      </motion.div>

      {/* GLOBAL HUD ELEMENTS */}
      <div className="absolute top-24 right-8 flex flex-col items-end gap-1 opacity-50">
         <div className="w-1 h-24 bg-gradient-to-b from-transparent via-pagani-gold to-transparent"></div>
         <span className="text-[10px] font-rajdhani text-pagani-gold writing-vertical-rl">SYSTEM ACTIVE</span>
      </div>
    </div>
  );
}
