export default function Footer() {
  return (
    <footer className="bg-pagani-black py-24 px-6 border-t border-pagani-gold/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pagani-gold/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <h2 className="font-orbitron text-3xl text-white tracking-widest">
            PAGANI
          </h2>
          <p className="font-rajdhani text-gray-400 text-sm leading-relaxed">
            The fusion of Art and Science. <br />
            Handcrafted in San Cesario sul Panaro, Italy.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div className="flex flex-col gap-6">
          <h4 className="font-orbitron text-pagani-gold text-sm tracking-[0.2em] uppercase">
            Explore
          </h4>
          <div className="flex flex-col gap-4 text-sm font-rajdhani text-gray-400 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">
              Huayra Roadster BC
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Utopia
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pagani Arte
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Museum
            </a>
          </div>
        </div>

        {/* Column 3: Legal */}
        <div className="flex flex-col gap-6">
          <h4 className="font-orbitron text-pagani-gold text-sm tracking-[0.2em] uppercase">
            Legal
          </h4>
          <div className="flex flex-col gap-4 text-sm font-rajdhani text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Company Info
            </a>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-6">
          <h4 className="font-orbitron text-pagani-gold text-sm tracking-[0.2em] uppercase">
            Newsletter
          </h4>
          <p className="font-rajdhani text-gray-400 text-xs">
            Join our exclusive circle for latest updates.
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-white/5 border border-white/10 px-4 py-3 text-xs font-rajdhani text-white placeholder-gray-500 focus:border-pagani-gold outline-none transition-colors"
            />
            <button className="bg-pagani-gold text-pagani-black font-orbitron text-xs font-bold py-3 uppercase tracking-widest hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-rajdhani text-gray-600 uppercase tracking-wider">
        <p>© 2024 PAGANI AUTOMOBILI S.P.A.</p>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-pagani-gold transition-colors">
            Instagram
          </span>
          <span className="cursor-pointer hover:text-pagani-gold transition-colors">
            YouTube
          </span>
          <span className="cursor-pointer hover:text-pagani-gold transition-colors">
            LinkedIn
          </span>
        </div>
      </div>
      {/* Signature */}
      <div className="mt-8 text-center text-[10px] font-rajdhani uppercase tracking-[0.3em] text-gray-500">
        Made with respect by{" "}
        <span className="text-pagani-gold hover:text-white transition-colors">
          Pratham Raghuvanshi
        </span>
      </div>
    </footer>
  );
}
