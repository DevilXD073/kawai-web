import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "The Kawai Store — Premium Services. Kawaii Prices.",
  description: "Shop affordable Discord, gaming and digital services at The Kawai Store. Premium services, fast delivery and kawaii prices.",
  openGraph: {
    title: "The Kawai Store — Premium Services. Kawaii Prices.",
    description: "Affordable digital services for Discord, gaming and online communities.",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "The Kawai Store", description: "Premium Services. Kawaii Prices." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
