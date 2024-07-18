import type { Metadata } from "next";
import { Hind_Madurai } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

const inter = Hind_Madurai({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DesignSolution",
  description: "Freedom to choose your website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("bg-slate-900 text-white", inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
