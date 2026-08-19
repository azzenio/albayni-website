import type { Metadata } from "next";
import { Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const heading = Alexandria({
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://albayni.example.com"), // Placeholder — يُستبدل بالنطاق الرسمي بعد حجزه
  title: "البيني | منصة عربية للبحث والتحليل البيني",
  description:
    "مشروع عربي يطوّر منصة بحث وتحليل بيني مدعومة بالذكاء الاصطناعي، تنطلق من خريطة معرفة منظمة لتبني دراسة بينية متكاملة.",
  openGraph: {
    title: "البيني | حيث تتقاطع المعارف، تتسع الرؤية",
    description:
      "من خريطة معرفة تضم 19 ركيزة إلى إطار بيني ودراسة موثقة — مشروع عربي للبحث والتحليل البيني.",
    locale: "ar_SA",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "البيني — حيث تتقاطع المعارف، تتسع الرؤية" }],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${heading.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
