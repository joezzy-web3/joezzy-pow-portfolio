"use client";

import React, { useState } from "react";
import { bountiesData } from "../data/bounties";

const categories = ["All", "3D / Render", "Smart Contracts", "AI x Web3", "Content & Media"] as const;

export default function BountyVault() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredBounties =
    selectedCategory === "All"
      ? bountiesData
      : bountiesData.filter((b) => b.category === selectedCategory);

  return (
    <section className="w-full py-4 relative z-20">
      {/* Category Nav Header */}
      <div className="glass-panel p-5 rounded-3xl mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span className="text-sky-400 font-mono text-xs tracking-widest uppercase font-bold">
              // OCEANIC PROOF OF WORK
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-1">
            Bounty Vault & Wins
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-2xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-400 to-blue-500 text-black font-extrabold shadow-lg shadow-sky-500/30 scale-105"
                    : "bg-[#041a2e]/60 text-sky-200/70 hover:text-white hover:bg-[#082b48] border border-sky-500/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBounties.map((item) => (
          <div
            key={item.id}
            className="glass-panel rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between group"
          >
            <div>
              {/* Header Info */}
              <div className="flex justify-between items-start gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase bg-sky-500/10 text-sky-300 border border-sky-400/30 px-3 py-1 rounded-xl shadow-inner">
                  🪸 {item.platform} • {item.sponsor}
                </span>
                <span className="text-xs font-mono text-sky-300/60 bg-[#020e1a] px-3 py-1 rounded-lg border border-sky-500/20">
                  {item.date}
                </span>
              </div>

              {/* Title & Prize */}
              <h3 className="text-2xl font-black text-white group-hover:text-sky-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sky-400 font-extrabold text-base mt-1 mb-4 flex items-center gap-1.5">
                <span>💎</span> {item.prize}
              </p>

              {/* Dynamic Catchy Hook Snippet */}
              {item.hookQuote && (
                <div className="bg-[#021122]/90 border-l-4 border-sky-400 p-4 rounded-r-2xl mb-4 text-sky-200 text-sm font-medium italic shadow-inner">
                  &ldquo;{item.hookQuote}&rdquo;
                </div>
              )}

              {/* Description */}
              <p className="text-sky-100/70 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Video Player */}
              {item.media?.videoUrl && (
                <div className="w-full rounded-2xl overflow-hidden border border-sky-500/30 bg-black/80 my-5 shadow-2xl relative">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-60 object-cover rounded-2xl"
                  >
                    <source src={item.media.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Image Display */}
              {item.media?.imageUrl && (
                <div className="w-full rounded-2xl overflow-hidden border border-sky-500/30 bg-black/80 my-5 shadow-2xl relative">
                  <img
                    src={item.media.imageUrl}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-2xl"
                  />
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-[#031d33] text-sky-200 px-3 py-1 rounded-lg border border-sky-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-sky-500/20 text-xs">
              {item.links.tweet && (
                <a
                  href={item.links.tweet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-black font-black px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-sky-500/20"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  View Post
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
