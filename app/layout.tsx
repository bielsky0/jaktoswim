import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, Layout, Footer } from "@/shared/components";

import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JakToSwim",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Navbar />
        </Layout>

        {children}

        <Layout className="max-w-screen w-full bg-black rounded-tl-2xl rounded-tr-2xl py-12">
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
