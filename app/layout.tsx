import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ToogleTheme } from "@/components/shared/toogle-theme";
import Navbar from "@/components/header/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(inter.className)}>
        <main>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
