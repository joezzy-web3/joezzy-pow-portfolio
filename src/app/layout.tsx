import "./globals.css";

export const metadata = {
  title: "Joezzy | Web3 Architect",
  description: "Sui Move & Decentralized Apps Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020b14] text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
