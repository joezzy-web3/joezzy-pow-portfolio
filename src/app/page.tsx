"use client";

import React from "react";
import BountyVault from "../components/BountyVault";

export default function Home() {
  return (
    <main className="min-h-screen ocean-bg text-gray-100 p-4 md:p-10 flex flex-col items-center relative overflow-hidden">
      
      {/* Ocean Sun Rays Glowing from Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-teal-400/10 blur-3xl pointer-events-none rounded-full" />

      {/* Animated Underwater Bubbles */}
      <div className="bubble w-4 h-4 left-[10%]" style={{ animationDelay: "0s", animationDuration: "9s" }} />
      <div className="bubble w-6 h-6 left-[25%]" style={{ animationDelay: "2s", animationDuration: "12s" }} />
      <div className="bubble w-3 h-3 left-[45%]" style={{ animationDelay: "4s", animationDuration: "7s" }} />
      <div className="bubble w-5 h-5 left-[70%]" style={{ animationDelay: "1s", animationDuration: "10s" }} />
      <div className="bubble w-7 h-7 left-[88%]" style={{ animationDelay: "3s", animationDuration: "11s" }} />

      <div className="w-full max-w-5xl space-y-10 relative z-10">
        
        {/* Ocean Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-cyan-500/20 pb-8 gap-6 pt-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[11px] font-bold shadow-[0_0_15px_rgba(0,225,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              OCEANIC WEB3 ARCHITECT
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              Joezzy<span className="text-cyan-400">.</span>
            </h1>
            <p className="text-cyan-100/70 text-sm md:text-base max-w-xl leading-relaxed">
              Diving deep into Sui Move smart contracts, GPU-driven 3D rendering on Render Network, and decentralized apps.
            </p>
          </div>

          {/* Profile Card */}
          <div className="flex items-center gap-4 bg-[#041a2a]/90 border border-cyan-400/30 p-3.5 pr-6 rounded-2xl shadow-[0_0_25px_rgba(0,210,255,0.15)] backdrop-blur-md">
            <div className="relative">
              <img
                src="/images/pfp.jpg"
                alt="joezzy-web3"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://github.com/joezzy-web3.png";
                }}
                className="w-12 h-12 rounded-xl border-2 border-cyan-400 object-cover shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-cyan-400 border-2 border-[#020b14] rounded-full animate-pulse" />
            </div>
            
            <div className="text-left">
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                joezzy-web3
              </p>
              <a
                href="https://github.com/joezzy-web3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-300 hover:underline font-mono"
              >
                @joezzy-web3 ↗
              </a>
            </div>
          </div>
        </header>

        {/* Bounty Vault Section */}
        <BountyVault />

      </div>
    </main>
  );
}
