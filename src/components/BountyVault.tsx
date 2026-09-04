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

      {/* Grid of Cards matching reference glass style */}
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
              {item.links.github && (
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#031d33] hover:bg-[#062c4c] text-sky-200 border border-sky-500/30 px-5 py-2.5 rounded-xl transition font-medium"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
