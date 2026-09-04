"use client";

import React from "react";

interface CvDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvDrawer({ isOpen, onClose }: CvDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-2xl h-full bg-[#010a17] border-l border-sky-500/30 p-6 md:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl">
        
        {/* Background Animated Video Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-15 blur-[1px]"
          >
            <source src="/videos/animated-pfp.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#010a17]/90 via-[#010a17]/80 to-[#010a17]/95" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-center border-b border-sky-500/20 pb-4">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight">Curriculum Vitae</h2>
              <p className="text-xs font-mono text-sky-400/70 mt-0.5">// PROFESSIONAL RECORD</p>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 font-mono text-xs transition-all"
            >
              [CLOSE] ✕
            </button>
          </div>

          <div className="space-y-6 text-sky-200/90 text-sm leading-relaxed">
            <div className="glass-panel p-5 rounded-2xl border border-sky-500/20 bg-[#031d33]/40 space-y-2">
              <h3 className="text-base font-bold text-white font-mono">Overview</h3>
              <p>
                Web3 & AI Developer specializing in smart contract architecture (Sui Move), decentralized data integrity protocols (KGeN, Humyn Labs), and full-stack interactive applications.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-sky-500/20 bg-[#031d33]/40 space-y-3">
              <h3 className="text-base font-bold text-white font-mono">Core Stack</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {["Sui Move", "Python", "TypeScript", "Next.js", "TailwindCSS", "Render Network", "Git / GitHub", "Google GenAI SDK"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-sky-500/10 border border-sky-400/30 text-sky-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-sky-500/20 bg-[#031d33]/40 space-y-2">
              <h3 className="text-base font-bold text-white font-mono">Recent Focus</h3>
              <p>
                Developing decentralized proof-of-work repositories, exploring multi-sensory data pipelines for physical AI, and building immersive user interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="relative z-10 pt-6 border-t border-sky-500/20 mt-6">
          <a
            href="/videos/animated-pfp.mp4"
            download
            className="block text-center py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black font-mono text-xs uppercase tracking-wider shadow-lg shadow-sky-500/20 hover:scale-[1.01] transition-all"
          >
            Download CV Asset / Resume ↗
          </a>
        </div>

      </div>
    </div>
  );
}
