export type BrandHue = "sapphire" | "emerald" | "ruby" | "obsidian" | "chrome";
export type BrandKind = "watches" | "jewelry" | "both";

export type Brand = {
  slug: string;
  name: string;       // display name
  short: string;      // chip-style short code
  era: string;        // "Genève · с 1839"
  description: string;
  hue: BrandHue;
  hasStock: boolean;
  /** what categories this maison shows up in */
  kind: BrandKind;
};

export const BRANDS: Brand[] = [
  // ============== WATCHES ==============
  {
    slug: "patek-philippe",
    name: "PATEK PHILIPPE",
    short: "PATEK",
    era: "Genève · с 1839",
    description:
      "Швейцарская мануфактура высшего часового искусства. Семейное предприятие Stern с 1932 года. Каждый калибр производится в Женеве, проходит печать Patek Philippe Seal. Самые востребованные модели — Nautilus, Aquanaut, Calatrava, perpetual calendar.",
    hue: "sapphire",
    hasStock: true,
    kind: "watches",
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
    kind: "watches",
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
    kind: "both",
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
    kind: "watches",
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
    kind: "watches",
  },
  // ============== JEWELRY ==============
  {
    slug: "graff",
    name: "GRAFF",
    short: "GRAFF",
    era: "London · с 1960",
    description:
      "Лондонский ювелирный дом, специализирующийся на исключительных бриллиантах. Графф огранил знаменитые камни Lesedi La Rona, Constellation, Hope Pink. Высокое ювелирное искусство — колье, серьги, браслеты с фантазийными бриллиантами.",
    hue: "sapphire",
    hasStock: true,
    kind: "jewelry",
  },
  {
    slug: "boucheron",
    name: "BOUCHERON",
    short: "BOUCHERON",
    era: "Paris · с 1858",
    description:
      "Парижский Maison на Place Vendôme. Первый ювелирный дом, открывший бутик на главной площади ювелиров мира в 1893 году. Иконические коллекции Quatre, Serpent Bohème, Plume de Paon — современная классика французского high jewellery.",
    hue: "ruby",
    hasStock: true,
    kind: "jewelry",
  },
  {
    slug: "piaget",
    name: "PIAGET",
    short: "PIAGET",
    era: "La Côte-aux-Fées · с 1874",
    description:
      "Швейцарская мануфактура часов и украшений. Знаменита ультратонкими калибрами и золотыми женскими украшениями коллекций Possession, Rose, Sunlight. Объединяет watchmaking и jewelry под одной крышей.",
    hue: "ruby",
    hasStock: true,
    kind: "jewelry",
  },
  {
    slug: "chopard",
    name: "CHOPARD",
    short: "CHOPARD",
    era: "Genève · с 1860",
    description:
      "Семейная швейцарская мануфактура часов и украшений. Этичное золото Fairmined, флагманские коллекции Happy Diamonds (1976) и Mille Miglia. Официальный партнёр Каннского кинофестиваля и трофеев Mille Miglia.",
    hue: "sapphire",
    hasStock: true,
    kind: "jewelry",
  },
  {
    slug: "messika",
    name: "MESSIKA",
    short: "MESSIKA",
    era: "Paris · с 2005",
    description:
      "Молодой парижский Maison Валери Мессики. Современный взгляд на бриллиант: подвижные камни, минималистичная архитектура. Иконические коллекции Move, My Twin, Lucky Move. Самый востребованный бренд новой volны french luxury.",
    hue: "ruby",
    hasStock: true,
    kind: "jewelry",
  },
];

export function getBrand(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}

export function brandsWithStock(): Brand[] {
  return BRANDS.filter((b) => b.hasStock);
}

export function watchBrands(): Brand[] {
  return BRANDS.filter((b) => b.hasStock && (b.kind === "watches" || b.kind === "both"));
}

export function jewelryBrands(): Brand[] {
  return BRANDS.filter((b) => b.hasStock && (b.kind === "jewelry" || b.kind === "both"));
}
