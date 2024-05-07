import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans_Arabic } from "next/font/google";

import { Navbar, Layout, Footer } from "@/shared/components";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});

const IBMPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: "600",
  variable: "--font-IBMPlex",
});

export const metadata: Metadata = {
  title: "JakToSwim",
  description:
    "Odkryj radość pływania w Szczecinie z naszą szkółką! Nauka bezpiecznych umiejętności, doświadczeni instruktorzy, indywidualne podejście. Zapisz się już dziś i zanurz się w fascynującym świecie wody!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${IBMPlex.variable} ${montserrat.variable} ${montserrat.className}`}
      >
        <div className="pt-2 pb-20">
          <Navbar />
        </div>

        {children}

        <Layout className="max-w-screen w-full bg-black rounded-tl-2xl rounded-tr-2xl py-12">
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
