import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HighTech Solar System | Premium Solar Installation in Maharashtra",
  description: "Save up to 90% on electricity bills with HighTech Solar System, an MNRE Approved Solar Installation Partner offering residential, commercial, and industrial solar solutions.",
  keywords: ["Solar Energy", "Solar Panels", "Maharashtra Solar", "Net Metering", "Solar Subsidy", "MNRE"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider defaultTheme="system">
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
