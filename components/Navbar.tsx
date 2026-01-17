"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 ${
        isScrolled 
          ? "bg-pagani-black/80 backdrop-blur-xl tech-border-b" 
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link href="/" className="group flex items-center gap-2">
        <div className="h-2 w-2 bg-pagani-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <h1 className="font-orbitron text-2xl font-bold tracking-[0.2em] text-white group-hover:text-glow transition-all">
          PAGANI
        </h1>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {[
          { name: "Technical Data", href: "#specs" },
          { name: "Choose Your Vibe", href: "#vibe" },
          { name: "Brand", href: "#" }
        ].map((item) => (
             <Link key={item.name} href={item.href} className="font-rajdhani text-sm uppercase tracking-widest text-gray-400 hover:text-white cursor-pointer transition-colors">
                {item.name}
             </Link>
        ))}
      </div>

      <button className="relative px-8 py-2 overflow-hidden border border-white/20 hover:border-pagani-gold/50 group transition-all duration-300">
        <div className="absolute inset-0 bg-pagani-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
        <span className="relative z-10 font-rajdhani font-medium tracking-[0.2em] uppercase text-xs text-pagani-gold group-hover:text-white transition-colors">
            Inquire
        </span>
      </button>
    </motion.nav>
  );
}
