"use client";

import React from "react";
import BountyVault from "@/components/BountyVault";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d11] text-gray-100 p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-8">
        
        {/* Top Header & Developer PFP */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-6 gap-4">
          <div>
            <p className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-1">
              PROVING WORK ON-CHAIN & IN PUBLIC
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Joezzy's Web3 Vault
            </h1>
          </div>

          <div className="flex items-center gap-3 bg-[#161622] border border-gray-800 px-4 py-2 rounded-full shadow-lg">
            <img
              src="/images/pfp.jpg"
              alt="joezzy-web3"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://github.com/joezzy-web3.png";
              }}
              className="w-10 h-10 rounded-full border-2 border-amber-500 object-cover shadow-sm"
            />
            <div className="text-left">
              <p className="text-xs font-bold text-gray-100 flex items-center gap-1.5">
                joezzy-web3
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[9px] px-1.5 py-0.2 rounded font-mono">
                  BUILDER
                </span>
              </p>
              <p className="text-[10px] text-gray-400 font-mono">Full-Stack & Web3 Creator</p>
            </div>
          </div>
        </div>

        {/* Bounty Vault Section */}
        <BountyVault />

      </div>
    </main>
  );
}
