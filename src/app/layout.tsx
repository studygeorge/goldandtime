import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldandtime.ru"),
  title: {
    default: "Gold & Time — эксклюзивные часы и украшения",
    template: "%s · Gold & Time",
  },
  description:
    "Эксклюзивные часы и украшения. Rolex, Patek Philippe, Audemars Piguet, Cartier, Bulgari, Van Cleef & Arpels — в наличии и под заказ.",
  keywords: [
    "эксклюзивные часы",
    "украшения",
    "ювелирные изделия",
    "luxury",
    "Rolex",
    "Patek Philippe",
    "Cartier",
  ],
  openGraph: {
    title: "Gold & Time — эксклюзивные часы и украшения",
    description:
      "Rolex, Patek Philippe, Audemars Piguet, Cartier, Bulgari, Van Cleef & Arpels — в наличии и под заказ.",
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
    <html lang="ru" className={`${fira.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-graphite">
        {children}
      </body>
    </html>
  );
}
