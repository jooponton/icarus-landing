import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Atria — From drone to deal memo. In a week, not a quarter.",
  description:
    "Atria is a feasibility platform for real estate developers. Fly a candidate site, describe the program, and see a buildable, zoning-aware overlay on the real footage — for a fraction of the cost of a custom feasibility package. Built for retail REIT adaptive reuse and merchant builder multifamily teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${instrumentSerif.variable} bg-[#0a0a0a] antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
