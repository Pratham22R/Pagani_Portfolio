"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ZondaScrollCanvas from "./ZondaScrollCanvas";

export default function VibeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text Logic
  // Total Scroll 0.0 - 1.0 (covers 480 frames approx)
  // 0.0 - 0.30: Nero Carbonio
  // 0.30 - 0.60: Rosso Dubai
  // 0.60 - 1.0: Blu Tricolore (New)
  
  const neroOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const rossoOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const bluOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  return (
    <section id="vibe" ref={containerRef} className="h-[400vh] relative bg-pagani-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
         
         {/* Background Canvas (Black -> Red -> Blue) */}
         <div className="absolute inset-0 z-0">
             <ZondaScrollCanvas 
                scrollYProgress={scrollYProgress} 
                sequences={[
                    { folder: "/images/car-frames", count: 240 },
                    { folder: "/images/car-frames2", count: 240 }
                ]}
             />
         </div>
         
         {/* Overlay Gradient */}
         <div className="absolute inset-0 z-10 bg-gradient-to-b from-pagani-black/50 via-transparent to-pagani-black/80 pointer-events-none"></div>

         {/* Fixed Heading - Bottom Left */}
         <div className="absolute bottom-12 left-8 md:bottom-24 md:left-24 z-20 text-left">
            <h3 className="font-orbitron text-4xl md:text-6xl text-white mb-2 tracking-wide drop-shadow-xl leading-none">
              CHOOSE YOUR <br />
              <span className="text-pagani-gold">VIBE</span>
            </h3>
         </div>

         {/* Color Names - Bottom Right */}
         <div className="absolute bottom-12 right-8 md:bottom-24 md:right-24 z-20 text-right h-12 flex items-center justify-end">
                {/* Nero Carbonio */}
                <motion.p 
                    style={{ opacity: neroOpacity, x: useTransform(neroOpacity, [0, 1], [20, 0]) }}
                    className="absolute font-rajdhani text-2xl md:text-4xl text-gray-300 tracking-[0.2em] uppercase whitespace-nowrap"
                >
                    Nero Carbonio
                </motion.p>
                
                {/* Rosso Dubai */}
                <motion.p 
                    style={{ opacity: rossoOpacity, x: useTransform(rossoOpacity, [0, 1], [20, 0]) }}
                    className="absolute font-rajdhani text-2xl md:text-4xl text-red-500 tracking-[0.2em] uppercase whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                >
                    Rosso Dubai
                </motion.p>

                 {/* Blu Tricolore */}
                <motion.p 
                    style={{ opacity: bluOpacity, x: useTransform(bluOpacity, [0, 1], [20, 0]) }}
                    className="absolute font-rajdhani text-2xl md:text-4xl text-blue-500 tracking-[0.2em] uppercase whitespace-nowrap drop-shadow-[0_0_15px_rgba(0,100,255,0.6)]"
                >
                    Blu Tricolore
                </motion.p>
         </div>

         {/* Scroll Indicator - Center Bottom */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-white to-transparent"></div>
         </div>

      </div>
    </section>
  );
}
