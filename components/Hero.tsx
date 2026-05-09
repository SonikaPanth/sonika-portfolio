"use client";
import { useState, useEffect } from "react";

const Typewriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse border-r-4 border-primary-container ml-1"></span>
    </span>
  );
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="z-10 text-center max-w-4xl">
        <h1 className="font-display-lg-mobile md:text-display-lg font-extrabold mb-8 leading-tight">
          Hi, I'm <span className="text-primary-container neon-text-blue">Sonika.</span> <Typewriter text="I build digital frontiers." delay={80} />
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Full-stack engineer specializing in immersive web experiences and 3D interactions. Transforming complex problems into elegant, high-performance interfaces.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a className="group relative px-10 py-5 bg-primary-container text-on-primary-container font-bold rounded-full overflow-hidden transition-all duration-400 hover:scale-105 neon-glow-blue" href="#work">
            <span className="relative z-10">View My Work</span>
          </a>
          <a className="px-10 py-5 glass-panel text-on-surface font-bold rounded-full border border-white/20 hover:border-primary-fixed transition-all duration-400" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
      {/* 3D Abstract Shape Placeholder exactly as from Stitch HTML */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 select-none pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border-2 border-dashed border-primary/30 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-secondary/20 animate-[spin_40s_linear_infinite_reverse]"></div>
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-primary-container to-secondary-container rounded-full blur-[80px] opacity-30"></div>
      </div>
    </section>
  );
}
