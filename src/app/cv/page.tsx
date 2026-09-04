"use client";

import React from "react";
import Link from "next/link";

export default function CvPage() {
  return (
    <main className="min-h-screen text-gray-100 p-4 md:p-10 flex flex-col items-center relative overflow-hidden bg-[#010610]">
      {/* Background Looping PFP Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 filter blur-[3px] scale-110">
          <source src="/videos/pfp-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#010610]/85" />
      </div>

      <div className="w-full max-w-3xl relative z-10 space-y-6">
        <div className="flex justify-between items-center glass-panel p-5 rounded-2xl">
          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
            <span>📄</span> Professional CV
          </h1>
          <Link href="/" className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white font-mono text-xs font-bold transition-all">
            ← Back to Vault
          </Link>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-sky-300">Summary</h2>
            <p className="text-sky-100/80 text-sm md:text-base leading-relaxed">
              Dedicated Web3 builder and technical creator proficient in Sui Move smart contracts, custom token minting/burning mechanisms via TreasuryCap, Python automation, and AI tooling. Experienced in translating complex RWA and decentralized infrastructure into high-engagement content.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-sky-300">Core Expertise</h2>
            <p className="text-sky-100/80 text-sm md:text-base leading-relaxed">
              Specialized in decentralized finance logic, data integrity protocols (KGeN VeriFi), and high-reach X technical threads and video breakdowns.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
