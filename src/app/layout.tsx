import React from "react";
import "./globals.css";

export const metadata = {
  title: "Joezzy | Web3 Proof of Work Portfolio",
  description: "Bounties won, smart contracts, 3D showcases, and viral posts by joezzy-web3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d11] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
