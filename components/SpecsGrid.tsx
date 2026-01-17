"use client";

import { motion } from "framer-motion";

export default function SpecsGrid() {
    const specs = [
      { label: "Engine Code", value: "M158 - V12", detail: "6.0L Twin-Turbo", span: "md:col-span-2" },
      { label: "Material", value: "Carbo-Titanium", detail: "HP62 Monocoque", span: "md:col-span-1" },
      { label: "Dry Weight", value: "1350 kg", detail: "Power/Weight: 540 hp/ton", span: "md:col-span-1" },
      { label: "Transmission", value: "7-Speed Seq", detail: "Xtrac Transverse", span: "md:col-span-2" },
      { label: "Drive Layout", value: "RWD", detail: "Active Differential", span: "md:col-span-1" },
      { label: "Performance", value: "> 370 km/h", detail: "Active Aerodynamics", span: "md:col-span-2" },
    ];
  
    return (
      <section id="specs" className="py-32 px-6 md:px-24 bg-pagani-black relative overflow-hidden">
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ 
                   backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", 
                   backgroundSize: "40px 40px" 
               }}>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 tech-border-b pb-4">
                 <h3 className="font-orbitron text-4xl text-white">TECHNICAL <span className="text-pagani-gold">DATA</span></h3>
                 <p className="font-rajdhani text-sm text-gray-500 tracking-widest uppercase">Pagani Automobili // Huayra</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
                {specs.map((s, i) => (
                    <motion.div 
                        key={i} 
                        className={`glass-panel p-8 relative group overflow-hidden ${s.span} flex flex-col justify-between`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.5)" }}
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pagani-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Tech Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pagani-gold/30 group-hover:border-pagani-gold transition-colors" />
                        
                        <div className="relative z-10">
                             <p className="text-xs font-rajdhani text-pagani-gold uppercase tracking-[0.2em] mb-2 opacity-70 group-hover:opacity-100 transition-opacity">{s.label}</p>
                             <p className="text-3xl font-orbitron text-white group-hover:text-glow transition-all">{s.value}</p>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="h-px w-8 bg-white/20 my-4 group-hover:w-full transition-all duration-700 ease-out" />
                            <p className="font-rajdhani text-sm text-gray-400 group-hover:text-white transition-colors">{s.detail}</p>
                        </div>
                    </motion.div>
                ))}
             </div>
          </div>
      </section>
    );
  }
