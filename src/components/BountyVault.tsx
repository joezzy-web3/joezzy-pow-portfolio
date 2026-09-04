"use client";

import React, { useState } from "react";

export default function BountyVault() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const vaultItems = [
    {
      title: "Decentralized GPU Rendering on Render Network",
      date: "Aug 2026",
      tags: ["#RenderNetwork", "#GPU", "#3D", "#DecentralizedCompute"],
      videoSrc: "/videos/pfp-bg.mp4",
      postUrl: "https://x.com/joezzyweb3",
      githubUrl: "https://github.com/joezzy-web3",
      verified: true,
      description: "GPU driven 3D scene rendering and decentralized compute pipeline optimization leveraging the Render Network infrastructure."
    },
    {
      title: "Model Collapse & Physical AI Insights",
      date: "Aug 2026",
      tags: ["#AI", "#ModelCollapse", "#PhysicalAI", "#Web3"],
      videoSrc: "/videos/pfp-bg.mp4",
      postUrl: "https://x.com/joezzyweb3",
      githubUrl: "https://github.com/joezzy-web3",
      verified: true,
      description: "Deep dive analysis into synthetic data loops, model degradation, and why physical AI requires grounded real-world validation data."
    },
    {
      title: "KGeN VeriFi Data Integrity & Reputation Protocol",
      date: "Aug 2026",
      tags: ["#KGeN", "#VeriFi", "#DataIntegrity", "#Reputation"],
      videoSrc: "/videos/pfp-bg.mp4",
      postUrl: "https://x.com/joezzyweb3",
      githubUrl: "https://github.com/joezzy-web3",
      verified: true,
      description: "Exploring trust layers, gamer identity verification, and decentralized reputation architecture on KGeN VeriFi."
    }
  ];

  const currentItem = vaultItems[activeTab];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {vaultItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-2 border ${
              activeTab === idx
                ? "bg-sky-500/20 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] scale-105"
                : "bg-[#031d33]/50 border-sky-500/20 text-sky-300/70 hover:bg-[#031d33] hover:text-white"
            }`}
          >
            <span>📦</span>
            Vault #{idx + 1}
          </button>
        ))}
      </div>

      <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-6 transition-all duration-500 border border-sky-500/30 shadow-2xl bg-[#010a17]/90">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-sky-500/20 pb-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 font-mono text-[10px] font-bold">
                ECOSYSTEM BOUNTY • VAULT #{activeTab + 1}
              </span>
              <span className="text-sky-400/60 font-mono text-xs">
                {currentItem.date}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {currentItem.title}
            </h2>
          </div>

          {currentItem.verified && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-400/10 border border-sky-400/30 text-sky-300 font-mono text-xs font-bold shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <span>💎</span> Verified Submission
            </div>
          )}
        </div>

        <p className="text-sky-100/90 text-sm md:text-base leading-relaxed whitespace-pre-line bg-[#031d33]/50 p-5 rounded-2xl border border-sky-500/20">
          {currentItem.description}
        </p>

        <div className="relative rounded-2xl overflow-hidden border border-sky-500/30 bg-black shadow-[0_0_30px_rgba(56,189,248,0.15)] aspect-video">
          <video
            key={currentItem.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
          >
            <source src={currentItem.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {currentItem.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg bg-[#031d33] border border-sky-500/20 text-sky-300 font-mono text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-sky-500/20">
          <a
            href={currentItem.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition-all"
          >
            View Post ↗
          </a>
          <a
            href={currentItem.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#031d33] border border-sky-400/40 text-sky-300 hover:text-white font-mono text-xs font-bold hover:bg-[#062c4c] transition-all"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
