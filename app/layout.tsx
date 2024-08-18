import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import TranslationsProvider from "@/components/TranslationsProvider";

const libre = Libre_Baskerville({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeadTools Yeast Table",
  description: "Yeast data for the all yeasts available in MeadTools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TranslationsProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <body className={cn(libre.className, "bg-secondary")}>
            {children}
          </body>
        </ThemeProvider>
      </TranslationsProvider>
    </html>
  );
}
