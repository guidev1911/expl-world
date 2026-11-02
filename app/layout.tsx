import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://explworld.com"),
  title: {
    default: "EXPL WORLD — Explore how the world works.",
    template: "%s | EXPL WORLD",
  },
  description:
    "Explore ciência, natureza e tecnologia. Conhecimento para olhar de novo para o que sempre esteve ao seu redor.",
  applicationName: "EXPL WORLD",
  openGraph: {
    type: "website",
    siteName: "EXPL WORLD",
    title: "EXPL WORLD — Explore how the world works.",
    description:
      "Ciência, natureza e tecnologia explicadas com curiosidade.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
        <SiteHeader />
        <div id="main-content" className="site-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
