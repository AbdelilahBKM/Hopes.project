import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hope's project",
  description: "Developer Portfolio",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Abdelilah Boukhatem"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#080808] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
