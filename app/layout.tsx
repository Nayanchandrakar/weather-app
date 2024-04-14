import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import { ThemeProvider } from "@/components/shared/theme-provider";
import Navbar from "@/components/header/Navbar";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Weather app",
  description: "created with Next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.variable}`}>
        <main>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            <Toaster />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
