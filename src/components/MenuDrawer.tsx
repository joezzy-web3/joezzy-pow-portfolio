"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "cv", title: "Professional CV", icon: "📄", description: "View full background and core stack.", href: "/cv" },
    { id: "experience", title: "Experience & Stack", icon: "⚡", description: "Sui Move, Python AI tooling, and compute.", href: "/experience" },
    { id: "reviews", title: "Peer Reviews", icon: "💬", description: "Shoutouts and feedback on technical work.", href: "/reviews" },
    { id: "education", title: "Curriculum Milestones", icon: "🏆", description: "Sui Move developer track progress.", href: "/education" },
  ];

  return (
    <>
      {/* Pinned Top-Right Stacked Dash Button */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="glass-panel w-12 h-12 rounded-2xl flex flex-col justify-center items-center gap-1.5 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] border border-sky-400/40 bg-[#010a17]/90 group"
          aria-label="Open Menu"
        >
          <span className="w-6 h-0.5 bg-sky-400 rounded-full group-hover:w-7 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <span className="w-4 h-0.5 bg-sky-400 rounded-full group-hover:w-7 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <span className="w-5 h-0.5 bg-sky-400 rounded-full group-hover:w-7 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </button>
      </div>

      {/* Slide-out Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-md transition-opacity duration-300">
          
          {/* Drawer Content Panel with Looping PFP Video Background */}
          <div className="relative w-full max-w-md h-full bg-[#010610] border-l border-sky-500/30 shadow-2xl flex flex-col overflow-hidden animate-slideLeft">
            
            {/* Background Looping Animated PFP Video */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-20 filter blur-[3px] scale-110"
              >
                <source src="/videos/pfp-bg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-[#010610]/90 via-[#010a17]/85 to-[#010610]/95" />
            </div>

            {/* Drawer Header */}
            <div className="relative z-10 p-6 flex justify-between items-center border-b border-sky-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-sky-400 font-mono text-xs tracking-widest uppercase font-bold">
                  // NAVIGATION VAULT
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white hover:bg-sky-500/20 flex items-center justify-center transition-all font-mono font-bold"
              >
                ✕
              </button>
            </div>

            {/* Drawer Menu Links to Fresh Pages */}
            <div className="relative z-10 p-6 space-y-4 overflow-y-auto flex-1">
              <p className="text-xs font-mono text-sky-300/60 mb-2">SELECT A SECTION PAGE:</p>
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left p-4 rounded-2xl bg-[#031d33]/80 hover:bg-[#062c4c] border border-sky-500/30 transition-all duration-300 group shadow-lg flex items-center gap-4 block"
                >
                  <span className="text-2xl p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-base group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sky-200/60 text-xs mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="relative z-10 p-6 border-t border-sky-500/20 text-center font-mono text-xs text-sky-400/60">
              joezzy-web3 • 2026 Portfolio
            </div>
          </div>
        </div>
      )}
    </>
  );
}
