import type { BrandHue } from "./brands";

export type JewelryTagVariant = "stock" | "request" | "rare" | "limited" | "exclusive";

export type Jewelry = {
  slug: string;
  brand: string;
  brandSlug: string;
  model: string;
  ref: string;
  /** "Кольцо", "Колье", "Браслет", "Серьги", "Подвес" */
  category: "Кольцо" | "Колье" | "Браслет" | "Серьги" | "Подвес";
  year: string;
  condition: "NEW" | "PRE-OWNED" | "VINTAGE";
  price: string;
  priceUSD: number | null;
  papers: boolean;
  box: boolean;
  tag: string;
  tagVariant: JewelryTagVariant;
  hue: BrandHue;
  images?: string[];
  description: string;
  specs: Array<[string, string]>;
};

export const JEWELRY: Jewelry[] = [
  {
    slug: "graff-wild-flower-large-cluster-ring",
    brand: "GRAFF",
    brandSlug: "graff",
    model: "Wild Flower Large Cluster Ring",
    ref: "RGR844",
    category: "Кольцо",
    year: "2025",
    condition: "NEW",
    price: "$ 19 800",
    priceUSD: 19800,
    papers: true, box: true,
    tag: "В НАЛИЧИИ", tagVariant: "stock",
    hue: "sapphire",
    images: [
      "/jewelry/graff-wild-flower/01.jpg",
      "/jewelry/graff-wild-flower/02.jpg",
      "/jewelry/graff-wild-flower/04.jpg",
      "/jewelry/graff-wild-flower/03.jpg",
    ],
    description:
      "Россыпь бриллиантовых соцветий собрана с дикой непринуждённостью. Каждый лепесток выполнен индивидуально и поднимается к коже носителя с невесомой лёгкостью — как только что распустившийся цветок. Четыре сорта цветков образуют сад в коллекции Wild Flower — современный взгляд на традиционный английский garden. Каждый камень закреплён вручную в лондонском ателье Graff, по каждому бриллианту — GIA-сертификат.",
    specs: [
      ["Металл", "18k белое золото"],
      ["Бриллианты", "1.18 ct общий вес"],
      ["Огранка", "Round Brilliant"],
      ["Чистота", "VS1 — VVS1"],
      ["Цвет", "D — F"],
      ["Происхождение", "London Atelier"],
      ["Размер", "UK 7 · ⌀ 17,3 мм"],
      ["Сертификат", "GIA по каждому камню"],
      ["Гарантия", "Пожизненная Graff"],
      ["Комплект", "Сертификат + коробка + чехол"],
    ],
  },
  {
    slug: "boucheron-quatre-classique-pendant",
    brand: "BOUCHERON",
    brandSlug: "boucheron",
    model: "Quatre Classique Pendant L",
    ref: "JPN00669",
    category: "Подвес",
    year: "2025",
    condition: "NEW",
    price: "$ 11 600",
    priceUSD: 11600,
    papers: true, box: true,
    tag: "В НАЛИЧИИ", tagVariant: "stock",
    hue: "ruby",
    images: [
      "/jewelry/boucheron-quatre-classique-pendant/01.jpg",
      "/jewelry/boucheron-quatre-classique-pendant/02.jpg",
      "/jewelry/boucheron-quatre-classique-pendant/03.jpg",
      "/jewelry/boucheron-quatre-classique-pendant/04.jpg",
    ],
    description:
      "Quatre — иконическая коллекция Boucheron 2004 года: четыре линии в одном кольце-подвесе, каждая представляет одну из четырёх ремесленных техник дома Boucheron — гранированный гросгрен, узор клу-де-пари, double-godron из розового золота и бриллиантовая дорожка. Подвес L — крупная версия, на длинной цепи из жёлтого золота. Place Vendôme, Париж.",
    specs: [
      ["Металл", "Жёлтое + розовое + белое золото 18k"],
      ["Бриллианты", "0,42 ct (паве)"],
      ["Чистота", "VS1 — VS2"],
      ["Цвет", "G — H"],
      ["Длина цепи", "42 см, регулировка 38/40 см"],
      ["Размер подвеса", "L · ⌀ 12,5 мм"],
      ["Декор", "Гросгрен · клу-де-пари · double-godron · паве"],
      ["Происхождение", "Paris · Place Vendôme"],
      ["Гарантия", "Международная Boucheron"],
      ["Комплект", "Сертификат + коробка"],
    ],
  },
  {
    slug: "piaget-possession-ring-g34p9i00",
    brand: "PIAGET",
    brandSlug: "piaget",
    model: "Possession Ring",
    ref: "G34P9I00",
    category: "Кольцо",
    year: "2025",
    condition: "NEW",
    price: "$ 6 250",
    priceUSD: 6250,
    papers: true, box: true,
    tag: "В НАЛИЧИИ", tagVariant: "stock",
    hue: "ruby",
    images: [
      "/jewelry/piaget-possession-ring-g34p9i00/01.jpg",
      "/jewelry/piaget-possession-ring-g34p9i00/02.jpg",
      "/jewelry/piaget-possession-ring-g34p9i00/03.jpg",
      "/jewelry/piaget-possession-ring-g34p9i00/04.jpg",
    ],
    description:
      "Possession — кольцо с вращающимся внутренним обручем, сопровождает носителя во время раздумий и движений. Розовое золото 18k с одним брильянтом round brilliant, легко скользит и крутится. Иконическая модель Piaget с 1990 года — современный взгляд на «движущееся» украшение.",
    specs: [
      ["Металл", "18k розовое золото"],
      ["Бриллиант", "0,03 ct · Round Brilliant"],
      ["Чистота", "VVS1"],
      ["Цвет", "G"],
      ["Особенность", "Вращающийся обруч"],
      ["Размер", "53 (US 6 ½)"],
      ["Происхождение", "La Côte-aux-Fées · Швейцария"],
      ["Гарантия", "2 года Piaget International"],
      ["Комплект", "Сертификат + коробка"],
    ],
  },
  {
    slug: "chopard-happy-diamonds-bangle-85a017",
    brand: "CHOPARD",
    brandSlug: "chopard",
    model: "Happy Diamonds Icons Round Bangle",
    ref: "85A017-5001",
    category: "Браслет",
    year: "2025",
    condition: "NEW",
    price: "$ 12 400",
    priceUSD: 12400,
    papers: true, box: true,
    tag: "В НАЛИЧИИ", tagVariant: "stock",
    hue: "sapphire",
    images: [
      "/jewelry/chopard-happy-diamonds-bangle-85a017/01.jpg",
    ],
    description:
      "Happy Diamonds — флагманская коллекция Chopard с 1976 года. «Счастливые» бриллианты свободно перемещаются между двумя сапфировыми стёклами, переливаясь при каждом движении. Бангл из 18-каратного жёлтого золота с пятью свободными бриллиантами и круглым sапфировым окошком. Швейцарское ремесло из женевского ателье.",
    specs: [
      ["Металл", "18k жёлтое золото"],
      ["Бриллианты", "5 движущихся · 0,25 ct"],
      ["Огранка", "Round Brilliant"],
      ["Чистота", "VS"],
      ["Цвет", "G — H"],
      ["Стекло", "2 сапфировых окна"],
      ["Размер", "S · ⌀ 56–58 мм"],
      ["Происхождение", "Genève · Chopard Manufacture"],
      ["Гарантия", "2 года Chopard International"],
      ["Комплект", "Сертификат + коробка"],
    ],
  },
  {
    slug: "messika-move-uno-pave-bracelet",
    brand: "MESSIKA",
    brandSlug: "messika",
    model: "Move Uno Pavé Bracelet",
    ref: "04706-YG",
    category: "Браслет",
    year: "2025",
    condition: "NEW",
    price: "$ 5 380",
    priceUSD: 5380,
    papers: true, box: true,
    tag: "В НАЛИЧИИ", tagVariant: "stock",
    hue: "ruby",
    images: [
      "/jewelry/messika-move-uno-pave-bracelet/01.jpg",
    ],
    description:
      "Move — флагманская коллекция Messika с 2009 года. Браслет Move Uno Pavé — три бриллианта (один движущийся, два неподвижных) в обрамлении паве, на тонком тросе из жёлтого золота с регулируемой длиной. Voilà — современный French luxury, спроектированный Валери Мессикой.",
    specs: [
      ["Металл", "18k жёлтое золото"],
      ["Бриллианты", "0,15 ct · 1 движущийся + паве"],
      ["Огранка", "Round Brilliant"],
      ["Чистота", "VS1"],
      ["Цвет", "G"],
      ["Длина", "16–18 см · регулируемая"],
      ["Происхождение", "Paris · Messika Maison"],
      ["Гарантия", "2 года Messika International"],
      ["Комплект", "Сертификат + коробка"],
    ],
  },
];

export function getJewelry(slug: string): Jewelry | undefined {
  return JEWELRY.find((j) => j.slug === slug);
}

export function jewelryByBrand(brandSlug: string): Jewelry[] {
  return JEWELRY.filter((j) => j.brandSlug === brandSlug);
}

export function relatedJewelry(slug: string, count = 3): Jewelry[] {
  const j = getJewelry(slug);
  if (!j) return JEWELRY.slice(0, count);
  const same = JEWELRY.filter((x) => x.brandSlug === j.brandSlug && x.slug !== slug);
  const others = JEWELRY.filter((x) => x.brandSlug !== j.brandSlug && x.slug !== slug);
  return [...same, ...others].slice(0, count);
}
