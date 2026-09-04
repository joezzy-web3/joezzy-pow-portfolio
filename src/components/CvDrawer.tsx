"use client";

import React from "react";

interface CvDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvDrawer({ isOpen, onClose }: CvDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-2xl h-full bg-[#010a17]/70 backdrop-blur-md border-l border-sky-400/40 p-6 md:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl">
        
        {/* Background Animated Video Layer with Increased Brightness/Clarity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 brightness-125 contrast-115"
          >
            <source src="/videos/animated-pfp.mp4" type="video/mp4" />
          </video>
          {/* Lighter gradient overlay so text pops sharply */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#010a17]/60 via-[#010a17]/50 to-[#010a17]/75" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-center border-b border-sky-400/30 pb-4">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight drop-shadow-md">Curriculum Vitae</h2>
              <p className="text-xs font-mono text-sky-300 font-semibold mt-0.5">// PROFESSIONAL RECORD</p>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-sky-500/20 border border-sky-400/40 text-white hover:bg-sky-500/30 font-mono text-xs transition-all shadow-md"
            >
              [CLOSE] ✕
            </button>
          </div>

          <div className="space-y-6 text-white text-sm leading-relaxed">
            <div className="glass-panel p-5 rounded-2xl border border-sky-400/30 bg-[#021329]/80 backdrop-blur-md shadow-xl space-y-2">
              <h3 className="text-base font-bold text-sky-200 font-mono">Overview</h3>
              <p className="text-sky-100 font-medium">
                Web3 & AI Developer specializing in smart contract architecture (Sui Move), decentralized data integrity protocols (KGeN, Humyn Labs), and full-stack interactive applications.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-sky-400/30 bg-[#021329]/80 backdrop-blur-md shadow-xl space-y-3">
              <h3 className="text-base font-bold text-sky-200 font-mono">Core Stack</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {["Sui Move", "Python", "TypeScript", "Next.js", "TailwindCSS", "Render Network", "Git / GitHub", "Google GenAI SDK"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-sky-500/20 border border-sky-400/40 text-sky-200 font-semibold shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-sky-400/30 bg-[#021329]/80 backdrop-blur-md shadow-xl space-y-2">
              <h3 className="text-base font-bold text-sky-200 font-mono">Recent Focus</h3>
              <p className="text-sky-100 font-medium">
                Developing decentralized proof-of-work repositories, exploring multi-sensory data pipelines for physical AI, and building immersive user interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="relative z-10 pt-6 border-t border-sky-400/30 mt-6">
          <a
            href="/videos/animated-pfp.mp4"
            download
            className="block text-center py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-400 text-black font-black font-mono text-xs uppercase tracking-wider shadow-lg shadow-sky-500/30 hover:scale-[1.01] transition-all"
          >
            Download CV Asset / Resume ↗
          </a>
        </div>

      </div>
    </div>
  );
}
