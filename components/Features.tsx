export default function Features() {
    return (
      <section className="py-32 px-6 md:px-24 bg-carbon-gray relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
         
         <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-pagani-gold"></div>
                    <span className="font-rajdhani text-pagani-gold uppercase tracking-[0.3em] text-xs">Philsophy</span>
                 </div>
                 
                 <h3 className="font-orbitron text-5xl text-white mb-8 leading-tight">
                    UNCOMPROMISED <br /> 
                    <span className="text-pagani-gold text-glow">PERFORMANCE</span>
                 </h3>
                 
                 <p className="font-rajdhani text-lg text-gray-300 leading-relaxed mb-10 border-l-2 border-pagani-gold/30 pl-6">
                    Named after the Andean God of Wind, Huayra utilizes four active flaps to harness the air. It does not fight the wind; it dances with it, creating a seamless bond between art and physics.
                 </p>
                 
                 <button className="group flex items-center gap-4 text-white font-rajdhani uppercase tracking-widest text-sm hover:text-pagani-gold transition-colors">
                    <span>Read the Story</span>
                    <span className="block h-px w-8 bg-white group-hover:bg-pagani-gold transition-colors"></span>
                 </button>
            </div>
            
            <div className="md:col-span-7 relative">
                {/* Tech Frame for Visual */}
                <div className="absolute -inset-4 border border-white/5 z-0"></div>
                <div className="absolute -inset-4 border border-pagani-gold/20 opacity-0 md:opacity-100 transform translate-x-2 translate-y-2 z-0"></div>

                <div className="h-96 w-full bg-black/40 backdrop-blur-sm border border-white/10 relative z-10 flex flex-col items-center justify-center overflow-hidden group">
                     {/* Video Embedding */}
                     <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                     >
                        <source src="/video/A_photorealistic_continuous_1080p_2026011717 (1).mp4" type="video/mp4" />
                     </video>
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-pagani-black/80 via-transparent to-transparent pointer-events-none"></div>

                     <div className="absolute top-4 right-4 flex gap-2 z-20">
                        <div className="w-1 h-1 bg-pagani-gold"></div>
                        <div className="w-1 h-1 bg-pagani-gold/50"></div>
                        <div className="w-1 h-1 bg-pagani-gold/20"></div>
                     </div>

                     <p className="font-orbitron text-white/80 text-xl tracking-widest relative z-20 mix-blend-overlay">GOD OF WIND</p>
                     <p className="font-rajdhani text-xs text-pagani-gold mt-2 tracking-[0.2em] relative z-20 animate-pulse">SYSTEM ONLINE</p>
                </div>
            </div>
         </div>
      </section>
    );
  }
