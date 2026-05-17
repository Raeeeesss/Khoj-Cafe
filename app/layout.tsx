import type { Metadata } from "next";
import { Montserrat, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Montserrat: matches KHOJ's actual geometric bold signage font ── */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

/* ── Dancing Script: matches the menu's handwritten category headers ── */
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

/* ── Playfair Display: elegant serif for content headings ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khoj Calicut | Brewing Happiness — Kozhikode",
  description:
    "Kozhikode's favourite café on S Beach Road, Kuttichira. Loaded fries, burgers, shawarma, momos, pizza, pasta & more. Open daily 11 AM – 11:30 PM. Rated 4.5 ⭐.",
  keywords: [
    "khoj calicut", "khoj cafe kozhikode", "cafe kuttichira",
    "s beach road cafe", "loaded fries kozhikode", "shawarma calicut",
    "best cafe kozhikode", "brewing happiness khoj",
  ],
  openGraph: {
    title: "Khoj Calicut — Brewing Happiness",
    description: "Warm interiors, bold food & golden moments. Kozhikode's most-loved café.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dancing.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col overflow-x-hidden"
        style={{ background: "#1E1A10", fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)" }}
      >
        <ScrollReveal />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
