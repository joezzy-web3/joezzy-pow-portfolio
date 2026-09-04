"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BountyItem {
  id: string;
  title: string;
  category: "3D / Render" | "Smart Contracts" | "AI x Web3" | "Content & Media";
  date: string;
  badge: string;
  description: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  tags: string[];
  postUrl: string;
}

const BOUNTY_ITEMS: BountyItem[] = [
  {
    id: "1",
    title: "Every AI Metric is Lying: BRIDGE & Verified Human Data",
    category: "AI x Web3",
    date: "Sep 2026",
    badge: "🧠 Deep Dive & BRIDGE Benchmark",
    description: "Every AI metric you trust has been quietly lying through incomplete data. Introducing BRIDGE by Humyn Labs—an independent speech-recognition benchmark built for the Global South testing 15 models across 22 languages, code-switching, and verified human intelligence via KGeN.",
    mediaType: "video",
    mediaSrc: "/videos/fourth-content.mp4",
    tags: ["#HumynLabs", "#KGeN", "#BRIDGE", "#AI", "#Web3", "#CodeSwitching"],
    postUrl: "https://x.com/joezzyweb3",
  },
  {
    id: "2",
    title: "Physical AI & Multi-Sensory Data Breakdowns",
    category: "AI x Web3",
    date: "Sep 2026",
    badge: "💎 Featured Content",
    description: "Deep dive thread & video breakdown exploring why Physical AI requires multi-sensory data (sight, sound, motion, touch) and how verified human data networks solve robotics bottlenecks.",
    mediaType: "video",
    mediaSrc: "/videos/physical-ai.mp4",
    tags: ["#PhysicalAI", "#AIxWeb3", "#Robotics", "#KGeN", "#HumynLabs"],
    postUrl: "https://x.com/joezzyweb3",
  },
  {
    id: "3",
    title: "Model Collapse, Synthetic Data, & KGeN VeriFi",
    category: "AI x Web3",
    date: "May 2026",
    badge: "🚀 Verified Breakdown",
    description: "Analyzing synthetic data feedback loops and how KGeN VeriFi's decentralized reputation and data integrity protocol prevents AI model degradation.",
    mediaType: "image",
    mediaSrc: "/images/onelastchance.jpg",
    tags: ["#ModelCollapse", "#SyntheticData", "#VeriFi", "#AI"],
    postUrl: "https://x.com/joezzyweb3",
  },
  {
    id: "4",
    title: "Decentralized GPU Rendering on Render Network",
    category: "3D / Render",
    date: "Aug 2026",
    badge: "⚡ Compute Pipeline",
    description: "Optimizing decentralized 3D scene rendering nodes and distributed compute workloads using the Render Network architecture.",
    mediaType: "video",
    mediaSrc: "/videos/render-network-video.mp4",
    tags: ["#RenderNetwork", "#GPU", "#3D", "#DecentralizedCompute"],
    postUrl: "https://x.com/joezzyweb3",
  },
];

export default function BountyVault() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "3D / Render", "Smart Contracts", "AI x Web3", "Content & Media"];

  const filteredItems = selectedCategory === "All"
    ? BOUNTY_ITEMS
    : BOUNTY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Bounty Vault & Wins
          </h2>
          <p className="text-xs font-mono text-sky-400/70 mt-1">
            // OCEANIC PROOF OF WORK
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-sky-400 text-black border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.4)] scale-105"
                  : "bg-[#031d33]/50 text-sky-300/80 border-sky-500/20 hover:bg-[#031d33] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="glass-panel p-6 rounded-3xl space-y-4 border border-sky-500/30 bg-[#010a17]/90 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 font-bold">
                  {item.badge}
                </span>
                <span className="text-sky-400/60">{item.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                {item.title}
              </h3>

              <p className="text-sky-200/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-sky-500/30 bg-black aspect-video shadow-[0_0_20px_rgba(56,189,248,0.1)] flex items-center justify-center">
              {item.mediaType === "video" ? (
                <video
                  key={item.mediaSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src={item.mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={item.mediaSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#031d33] border border-sky-500/20 text-sky-300 font-mono text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={item.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black font-mono text-xs uppercase tracking-wider shadow-lg shadow-sky-500/20 hover:scale-[1.01] transition-all"
              >
                View Post ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
