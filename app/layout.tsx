import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pagani Huayra | The God of Wind",
  description: "Experience the Pagani Huayra through an immersive scrollytelling journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(
        orbitron.variable, 
        rajdhani.variable, 
        "antialiased bg-pagani-black text-white selection:bg-pagani-gold selection:text-black font-rajdhani"
      )}>
        {children}
      </body>
    </html>
  );
}
