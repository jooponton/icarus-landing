import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atria — See your dream build before you spend a dime",
  description:
    "Fly a drone over your property. Tell our AI what you're imagining. Watch it appear in 3D on your actual lot. No architect required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0a] antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
