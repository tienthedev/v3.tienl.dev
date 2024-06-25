import type { Metadata } from "next";
import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tien Le",
  description: "Tien Le portfolio version 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className={jetbrains_mono.className}>{children}</body>
      <SpeedInsights />
        <Analytics />
    </html>
  );
}
