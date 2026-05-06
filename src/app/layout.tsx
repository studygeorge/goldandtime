import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
});

const body = Inter({
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldandtime.ru"),
  title: {
    default: "Gold & Time — эксклюзивные часы и украшения",
    template: "%s · Gold & Time",
  },
  description:
    "Эксклюзивные часы и украшения ручной работы. Авторские коллекции, лимитированные модели, безупречное качество.",
  keywords: [
    "эксклюзивные часы",
    "украшения",
    "ювелирные изделия",
    "luxury",
    "лимитированная коллекция",
  ],
  openGraph: {
    title: "Gold & Time — эксклюзивные часы и украшения",
    description:
      "Авторские коллекции часов и ювелирных украшений. Лимитированные модели.",
    url: "https://goldandtime.ru",
    siteName: "Gold & Time",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-graphite">
        {children}
      </body>
    </html>
  );
}
