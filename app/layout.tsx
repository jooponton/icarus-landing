import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AuthNav from "@/components/AuthNav";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Atria — From drone to deal memo.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69e23a6a02816b001d7c13e8"})},document.head.appendChild(o)}try{if(localStorage.getItem("atria-cookie-consent")==="accepted"){initApollo();}else{window.__atriaLoadApollo=initApollo;}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.className} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} bg-[#0a0a0a] antialiased`}>
        <AuthNav />
        <div className="pt-16">
          {children}
        </div>
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
