"use client";

import React from "react";

interface CvDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvDrawer({ isOpen, onClose }: CvDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-[2px] transition-opacity">
      <div className="relative w-full max-w-2xl h-full bg-black/40 backdrop-blur-sm border-l border-white/20 p-6 md:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl">
        
        {/* Background Animated Video Layer - Fully Vivid and Clear */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85 brightness-150 contrast-125"
          >
            <source src="/videos/animated-pfp.mp4" type="video/mp4" />
          </video>
          {/* Extremely light gradient so the video shines through brilliantly while text remains readable */}
          <div className="absolute inset-0 bg-black/30 backdrop-brightness-110" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-center border-b border-white/20 pb-4">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Curriculum Vitae</h2>
              <p className="text-xs font-mono text-sky-200 font-bold mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">// PROFESSIONAL RECORD</p>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/30 text-white hover:bg-black/80 font-mono text-xs transition-all shadow-lg backdrop-blur-md"
            >
              [CLOSE] ✕
            </button>
          </div>

          <div className="space-y-6 text-white text-sm leading-relaxed">
            <div className="p-5 rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] space-y-2">
              <h3 className="text-base font-bold text-sky-300 font-mono drop-shadow">Overview</h3>
              <p className="text-white font-medium drop-shadow">
                Web3 & AI Developer specializing in smart contract architecture (Sui Move), decentralized data integrity protocols (KGeN, Humyn Labs), and full-stack interactive applications.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] space-y-3">
              <h3 className="text-base font-bold text-sky-300 font-mono drop-shadow">Core Stack</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {["Sui Move", "Python", "TypeScript", "Next.js", "TailwindCSS", "Render Network", "Git / GitHub", "Google GenAI SDK"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-white/10 border border-white/20 text-sky-200 font-bold shadow-md backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] space-y-2">
              <h3 className="text-base font-bold text-sky-300 font-mono drop-shadow">Recent Focus</h3>
              <p className="text-white font-medium drop-shadow">
                Developing decentralized proof-of-work repositories, exploring multi-sensory data pipelines for physical AI, and building immersive user interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="relative z-10 pt-6 border-t border-white/20 mt-6">
          <a
            href="/videos/animated-pfp.mp4"
            download
            className="block text-center py-3 rounded-xl bg-sky-400 text-black font-black font-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:bg-sky-300 hover:scale-[1.01] transition-all"
          >
            Download CV Asset / Resume ↗
          </a>
        </div>

      </div>
    </div>
  );
}
