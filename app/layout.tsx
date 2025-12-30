import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display, Dancing_Script, Cormorant_Garamond, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

const garamond = localFont({
  src: "../public/assets/fonts/garamondnovacondl-regular.ttf",
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martin Esparza - Portfolio",
  description: "Mobile & Web Developer | Automation Enthusiast",
  appleWebApp: {
    statusBarStyle: "default",
    title: "Martin Esparza",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${playfair.variable} ${dancing.variable} ${cormorant.variable} ${caveat.variable} ${garamond.variable} font-sans`}>{children}</body>
    </html>
  );
}
