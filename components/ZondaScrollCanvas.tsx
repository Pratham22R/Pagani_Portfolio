"use client";

import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Sequence {
  folder: string;
  count: number;
}

interface ZondaScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames?: number; // kept for backward compat if needed, though sequences preferred
  imageFolderPath?: string; // kept for backward compat
  sequences?: Sequence[];
}

export default function ZondaScrollCanvas({ 
  scrollYProgress, 
  totalFrames = 240,
  imageFolderPath = "/images/zonda-sequence",
  sequences
}: ZondaScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Normalize sequences
  const activeSequences = sequences || [{ folder: imageFolderPath, count: totalFrames }];
  const globalTotalFrames = activeSequences.reduce((acc, seq) => acc + seq.count, 0);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    activeSequences.forEach((seq) => {
        for (let i = 1; i <= seq.count; i++) {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `${seq.folder}/ezgif-frame-${paddedIndex}.jpg`;
            
            img.onload = () => {
                loadCount++;
                if (loadCount === globalTotalFrames) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
    });

    setImages(loadedImages);
  }, [JSON.stringify(activeSequences), globalTotalFrames]); // JSON.stringify to avoid deep obj ref changes

  // Draw frame function
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High-DPI support
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Object-fit: cover logic
    const img = images[index];
    const imageRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imageRatio) {
      drawWidth = width;
      drawHeight = width / imageRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imageRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;

    const frameIndex = Math.min(
      globalTotalFrames - 1,
      Math.floor(latest * globalTotalFrames)
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  useEffect(() => {
    if (isLoaded) renderFrame(0);
    
    const handleResize = () => {
        if (isLoaded) {
             const currentProgress = scrollYProgress.get();
             const frameIndex = Math.min(globalTotalFrames - 1, Math.floor(currentProgress * globalTotalFrames));
             renderFrame(frameIndex);
        }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, scrollYProgress, globalTotalFrames]);

  return (
    <div className="absolute inset-0 z-0 bg-pagani-black/90">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-pagani-gold font-rajdhani text-xl animate-pulse">
          INITIALIZING SEQUENCING...
        </div>
      )}
    </div>
  );
}
