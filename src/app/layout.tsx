import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  weight: ["300", "400", "600", "800"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldandtime.ru"),
  title: {
    default: "Gold & Time — часы и ювелирные редкости. Москва",
    template: "%s · Gold & Time",
  },
  description:
    "Дилер часов и ювелирных редкостей. Patek Philippe, Audemars Piguet, Rolex, Cartier, Vacheron, Lange, Richard Mille, Graff. Москва, Петровка 5, по записи. Цена — разговор.",
  keywords: [
    "Patek Philippe",
    "Audemars Piguet",
    "Rolex",
    "Cartier",
    "Vacheron Constantin",
    "Richard Mille",
    "часы Москва",
    "ювелирные украшения",
    "trade-in часы",
  ],
  openGraph: {
    title: "Gold & Time — часы и ювелирные редкости",
    description:
      "Подбор по запросу — без витринных накруток. Москва, Петровка 5, по записи.",
    url: "https://goldandtime.ru",
    siteName: "Gold & Time",
    locale: "ru_RU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${jbmono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full bg-ice text-ink">{children}</body>
    </html>
  );
}
