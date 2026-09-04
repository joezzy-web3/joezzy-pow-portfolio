"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Ecosystem Reviewer",
    rating: 5,
    comment: "Joezzy consistently delivers elite technical breakdowns and verified ecosystem bounties. His breakdown of Model Collapse and Physical AI sets the gold standard for developer content.",
    date: "August 2026",
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem("joezzy_client_reviews");
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (e) {
        console.error("Failed to parse saved reviews", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev: Review = {
      id: Date.now().toString(),
      name: newName,
      rating: newRating,
      comment: newComment,
      date: "Just now",
    };

    const updatedReviews = [newRev, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("joezzy_client_reviews", JSON.stringify(updatedReviews));

    setNewName("");
    setNewComment("");
    setNewRating(5);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="min-h-screen text-gray-100 p-4 md:p-10 flex flex-col items-center relative overflow-hidden bg-[#010610]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 filter blur-[3px] scale-110">
          <source src="/videos/pfp-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#010610]/85" />
      </div>

      <div className="w-full max-w-3xl relative z-10 space-y-8">
        <div className="flex justify-between items-center glass-panel p-5 rounded-2xl">
          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-4">
            Peer Reviews & Feedback
          </h1>
          <Link href="/" className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white font-mono text-xs font-bold transition-all">
            ← Back to Vault
          </Link>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-4 border border-sky-500/30 shadow-xl bg-[#010a17]/90">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-xs text-sky-300">
              // DROP A CLIENT REVIEW
            </h2>
          </div>

          {submitted && (
            <div className="p-4 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-200 text-xs font-mono animate-fadeIn">
              ✅ Thank you! Your review has been successfully saved and posted.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-sky-300/80">Your Name / Handle</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vitalik Fan"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-[#031d33] border border-sky-500/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-sky-500/40 focus:outline-none focus:border-sky-400 transition-all font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-sky-300/80">Star Rating</label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="w-full bg-[#031d33] border border-sky-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400 transition-all font-mono"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5/5 - Exceptional)</option>
                  <option value={4}>⭐⭐⭐⭐ (4/5 - Great Work)</option>
                  <option value={3}>⭐⭐⭐ (3/5 - Good)</option>
                  <option value={2}>⭐⭐ (2/5 - Fair)</option>
                  <option value={1}>⭐ (1/5 - Needs Improvement)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-sky-300/80">Review / Feedback Comment</label>
              <textarea
                required
                rows={3}
                placeholder="Share your experience working on smart contracts, bounties, or integrations..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full bg-[#031d33] border border-sky-500/30 rounded-xl p-4 text-sm text-white placeholder-sky-500/40 focus:outline-none focus:border-sky-400 transition-all font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-sky-500/20 hover:scale-[1.01] transition-all"
            >
              Post Review 🚀
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-mono text-sky-300/60 uppercase tracking-widest px-1">
            COMMUNITY & CLIENT FEEDBACK ({reviews.length})
          </h2>

          <div className="space-y-4">
            {reviews.map((rev) => (
              <div key={rev.id} className="glass-panel p-6 rounded-3xl space-y-3 bg-[#031d33]/60 border border-sky-500/20 shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-bold text-base flex items-center gap-2">
                      <span>👤</span> {rev.name}
                    </h3>
                    <div className="text-amber-400 text-xs mt-0.5 tracking-widest">
                      {"⭐".repeat(rev.rating)}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-sky-400/60">{rev.date}</span>
                </div>
                <p className="text-sky-200/90 text-sm leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
