"use client";

import React from "react";
import BountyVault from "../components/BountyVault";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-100 p-4 md:p-10 flex flex-col items-center relative overflow-hidden bg-[#010610]">
      
      {/* High-Resolution Deep Sea Diver Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none z-0"
        style={{ backgroundImage: "url('/images/ocean-bg.png')" }}
      />

      {/* Deep Ocean Lighting Overlay */}
      <div className="fixed inset-0 bg-radial from-transparent via-[#010a17]/50 to-[#010610] pointer-events-none z-0" />

      {/* Light Rays */}
      <div className="fixed top-0 left-1/4 w-32 h-screen light-ray -rotate-12 pointer-events-none z-0 opacity-50" />
      <div className="fixed top-0 left-1/2 w-48 h-screen light-ray -rotate-6 pointer-events-none z-0 opacity-70" />
      <div className="fixed top-0 right-1/4 w-40 h-screen light-ray rotate-12 pointer-events-none z-0 opacity-40" />

      {/* Floating Ocean Bubbles */}
      <div className="ocean-bubble w-3 h-3 left-[15%]" style={{ animationDuration: "14s", animationDelay: "0s" }} />
      <div className="ocean-bubble w-5 h-5 left-[30%]" style={{ animationDuration: "18s", animationDelay: "3s" }} />
      <div className="ocean-bubble w-2 h-2 left-[55%]" style={{ animationDuration: "11s", animationDelay: "1s" }} />
      <div className="ocean-bubble w-4 h-4 left-[75%]" style={{ animationDuration: "16s", animationDelay: "5s" }} />
      <div className="ocean-bubble w-6 h-6 left-[90%]" style={{ animationDuration: "20s", animationDelay: "2s" }} />

      <div className="w-full max-w-5xl space-y-10 relative z-10">
        
        {/* Ocean Header */}
        <header className="glass-panel p-6 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-2">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 font-mono text-[11px] font-bold shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              BUILDER & CREATOR | CRYPTO • RWA • AI
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
              Joezzy<span className="text-sky-400">.</span>
            </h1>
            <p className="text-sky-100/80 text-sm md:text-base max-w-xl leading-relaxed">
              Building Sui Move smart contracts & AI apps while documenting the journey through video breakdown showcases, technical threads, and deep dives.
            </p>

            {/* Sleek Animated Contact Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://x.com/joezzyweb3"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-500/10 font-mono text-xs font-bold"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Connect on X
              </a>

              <a
                href="https://github.com/joezzy-web3"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-500/10 font-mono text-xs font-bold"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:-rotate-12" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Profile Card with Local Profile Picture */}
          <div className="flex items-center gap-4 bg-[#021122]/80 border border-sky-400/30 p-3.5 pr-6 rounded-2xl shadow-xl backdrop-blur-md">
            <div className="relative w-12 h-12 flex-shrink-0">
              <img
                src="/images/pfp.jpg"
                alt="joezzy-web3 profile"
                className="w-12 h-12 rounded-xl border-2 border-sky-400 object-cover shadow-md bg-[#031d33]"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-sky-400 border-2 border-[#010610] rounded-full animate-pulse" />
            </div>
            
            <div className="text-left">
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                joezzy-web3
              </p>
              <a
                href="https://github.com/joezzy-web3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-300 hover:underline font-mono"
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
