"use client";

import React, { useState } from "react";
import { bountiesData } from "../data/bounties";

const categories = ["All", "3D / Render", "Smart Contracts", "AI x Web3", "Full Stack"] as const;

export default function BountyVault() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredBounties =
    selectedCategory === "All"
      ? bountiesData
      : bountiesData.filter((b) => b.category === selectedCategory);

  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-gray-800 pb-6">
        <div>
          <span className="text-amber-500 font-mono text-xs tracking-widest uppercase font-bold">
            // PROOF OF BUILD
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Bounty Vault & Wins
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                  : "bg-[#161622] text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBounties.map((item) => (
          <div
            key={item.id}
            className="bg-[#121218] border border-gray-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between space-y-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 opacity-80" />

            <div>
              <div className="flex justify-between items-start gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-md font-semibold">
                  {item.platform} • {item.sponsor}
                </span>
                <span className="text-xs font-mono text-gray-500">{item.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition mb-1">
                {item.title}
              </h3>
              <p className="text-amber-400 font-extrabold text-sm mb-3">
                {item.prize}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Local Video Player Integration */}
              {item.media?.videoUrl && (
                <div className="w-full rounded-xl overflow-hidden border border-gray-800 bg-black my-3">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-48 object-cover"
                  >
                    <source src={item.media.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-[#1c1c28] text-gray-300 px-2.5 py-0.5 rounded-md border border-gray-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80 text-xs">
              {item.links.tweet && (
                <a
                  href={item.links.tweet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-400 text-black font-bold px-3.5 py-2 rounded-lg transition"
                >
                  𝕏 View Post
                </a>
              )}
              {item.links.github && (
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1c1c28] hover:bg-gray-800 text-gray-200 border border-gray-700 px-3.5 py-2 rounded-lg transition font-medium"
                >
                  💻 GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
