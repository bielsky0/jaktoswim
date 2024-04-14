import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Layout, Footer } from "@/shared/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
