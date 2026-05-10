export type BrandHue = "sapphire" | "emerald" | "ruby" | "obsidian" | "chrome";

export type Brand = {
  slug: string;
  name: string;       // display name
  short: string;      // chip-style short code
  era: string;        // "Genève · с 1839"
  description: string;
  hue: BrandHue;
  hasStock: boolean;
};

export const BRANDS: Brand[] = [
  {
    slug: "patek-philippe",
    name: "PATEK PHILIPPE",
    short: "PATEK",
    era: "Genève · с 1839",
    description:
      "Швейцарская мануфактура высшего часового искусства. Семейное предприятие Stern с 1932 года. Каждый калибр производится в Женеве, проходит печать Patek Philippe Seal. Самые востребованные модели — Nautilus, Aquanaut, Calatrava, perpetual calendar.",
    hue: "sapphire",
    hasStock: true,
  },
  {
    slug: "rolex",
    name: "ROLEX",
    short: "ROLEX",
    era: "Genève · с 1905",
    description:
      "Эталон надёжности и узнаваемости. Винтажные Submariner и Daytona — устойчивая инвестиционная категория. Современные Daytona, GMT-Master II, Sky-Dweller — основной спрос. Каждые часы проходят сертификацию Superlative Chronometer (-2/+2 с/сутки).",
    hue: "obsidian",
    hasStock: true,
  },
  {
    slug: "cartier",
    name: "CARTIER",
    short: "CARTIER",
    era: "Paris · с 1847",
    description:
      "Парижский ювелирный дом, поставщик королевских домов Европы. Часовые иконы — Tank (с 1917), Santos (с 1904), Crash (1967). Высокое ювелирное искусство в коллекциях Panthère, Trinity, Love. Архивные позиции — топ инвестиционных лотов.",
    hue: "ruby",
    hasStock: true,
  },
  {
    slug: "vacheron-constantin",
    name: "VACHERON CONSTANTIN",
    short: "VACHERON",
    era: "Genève · с 1755",
    description:
      "Старейшая непрерывно работающая часовая мануфактура мира. Носит женевскую печать Hallmark of Geneva. Знаковые линии — Overseas, Patrimony, Traditionnelle, Métiers d'Art. Каждый часовой механизм собирается и регулируется вручную.",
    hue: "emerald",
    hasStock: true,
  },
  {
    slug: "a-lange-sohne",
    name: "A. LANGE & SÖHNE",
    short: "LANGE",
    era: "Glashütte · с 1845",
    description:
      "Саксонская мануфактура, возрождённая в 1990 году. Каждый калибр — собственного производства, все модели — только из золота, платины или хонэйкомба. Lange 1, Datograph, Zeitwerk — эталоны современной механики и архитектуры калибров.",
    hue: "obsidian",
    hasStock: true,
  },
  {
    slug: "graff",
    name: "GRAFF",
    short: "GRAFF",
    era: "London · с 1960",
    description:
      "Лондонский ювелирный дом, специализирующийся на исключительных бриллиантах. Графф огранил знаменитые камни Lesedi La Rona, Constellation, Hope Pink. Высокое ювелирное искусство — колье, серьги, браслеты с фантазийными бриллиантами.",
    hue: "sapphire",
    hasStock: true,
  },
];

export function getBrand(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}

export function brandsWithStock(): Brand[] {
  return BRANDS.filter((b) => b.hasStock);
}
