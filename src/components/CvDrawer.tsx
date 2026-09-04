"use client";

import React from "react";

interface CvDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvDrawer({ isOpen, onClose }: CvDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      {/* Main Drawer Container with Inline 15% Opacity Background */}
      <div 
        className="relative w-full max-w-2xl h-full border-l border-white/30 p-6 md:p-8 overflow-y-auto flex flex-col justify-between shadow-2xl"
        style={{ backgroundColor: 'rgba(1, 10, 23, 0.15)', backdropFilter: 'blur(2px)' }}
      >
        
        {/* Background Animated Video Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/animated-pfp.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-center border-b border-white/30 pb-4">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Curriculum Vitae</h2>
              <p className="text-xs font-mono text-sky-200 font-bold mt-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">// PROFESSIONAL RECORD</p>
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-white/40 text-white font-mono text-xs transition-all shadow-lg backdrop-blur-md"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              [CLOSE] ✕
            </button>
          </div>

          <div className="space-y-6 text-white text-sm leading-relaxed">
            <div 
              className="p-5 rounded-2xl border border-white/30 shadow-xl space-y-2 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
            >
              <h3 className="text-base font-bold text-sky-300 font-mono drop-shadow">Overview</h3>
              <p className="text-white font-medium drop-shadow">
                Web3 & AI Developer specializing in smart contract architecture (Sui Move), decentralized data integrity protocols (KGeN, Humyn Labs), and full-stack interactive applications.
              </p>
            </div>

            <div 
              className="p-5 rounded-2xl border border-white/30 shadow-xl space-y-3 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
            >
              <h3 className="text-base font-bold text-sky-300 font-mono drop-shadow">Core Stack</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {["Sui Move", "Python", "TypeScript", "Next.js", "TailwindCSS", "Render Network", "Git / GitHub", "Google GenAI SDK"].map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-md border border-white/30 text-sky-200 font-bold shadow-md backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="p-5 rounded-2xl border border-white/30 shadow-xl space-y-2 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
            >
              <h3 className="text-base font-bold text-sky-300 font-mono drop-shadow">Recent Focus</h3>
              <p className="text-white font-medium drop-shadow">
                Developing decentralized proof-of-work repositories, exploring multi-sensory data pipelines for physical AI, and building immersive user interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="relative z-10 pt-6 border-t border-white/30 mt-6">
          <a
            href="/videos/animated-pfp.mp4"
            download
            className="block text-center py-3 rounded-xl bg-sky-400 text-black font-black font-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:bg-sky-300 hover:scale-[1.01] transition-all"
          >
            Download CV Asset / Resume ↗
          </a>
        </div>

      </div>
    </div>
  );
}
