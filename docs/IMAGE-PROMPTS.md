# Промпты для генерации изображений · Gold & Time

Универсальные промпты, работающие в **Midjourney v7 / v6.1**, **Flux 1.1 Pro / Flux Dev**, **Imagen 4**, **GPT Image / DALL-E 3**, **Stable Diffusion 3.5**.

## Базовые правила

1. **Не называем бренды** в промпте (Rolex / Cartier / Patek). Используем родовые описания: «luxury Swiss chronograph», «high-jewellery panther necklace», «iconic clover-shaped pendant» — это безопаснее с точки зрения TOS моделей и торговых марок.
2. **Стиль:** editorial fashion photography для журналов **Vogue · Robb Report · T Magazine · How To Spend It**.
3. **Колор:** тёплая кремовая палитра, чтобы фото бесшовно ложилось на светлый сайт.
4. **Объектив и свет** прописываем: `85mm f/1.4`, `100mm macro`, `softbox`, `golden hour through linen curtains`.
5. **Постпродакшн:** `medium-format film look`, `Hasselblad`, `Kodak Portra 400`, `subtle warm grading`.
6. **Соотношение:** `--ar 4:5` для карточек, `--ar 16:9` или `--ar 21:9` для hero, `--ar 1:1` для квадратов.
7. **Качество:** Midjourney `--style raw --v 7 --q 2 --s 250`. Flux: `--guidance 3.5`. Imagen: добавлять `photorealistic, sharp focus, professional retouching`.

---

## 1. HERO · Главный экран

### 1A. Мужская рука с часами в манжете — крупно (рекомендую как хедер)

```
Editorial close-up, a man's wrist resting on a cream linen tablecloth,
wearing a luxury Swiss platinum chronograph with an ice-blue sunburst
dial, sapphire crystal, applied gold indices, polished steel bracelet.
Shirt cuff: white French poplin with mother-of-pearl button. Skin tone
warm beige, light freckles, manicured. Background out of focus: ivory
silk drapery, faint gold reflection. Studio lighting, soft box from
camera right, gentle gold rim from above. Shot on Hasselblad H6D-100c,
100mm macro, f/4, ISO 100, Kodak Portra 400 emulation, warm cream
grading. Crisp watch detail, shallow depth of field. Editorial Robb
Report, How To Spend It style. --ar 21:9 --style raw --v 7 --s 300
```

### 1B. Женская рука и колье на бархате

```
Top-down editorial composition: a woman's elegant hand with manicured
oval almond nails (nude beige polish) gently holding a high-jewellery
diamond riviera necklace on a champagne silk cushion. Pavé diamonds
catch light, white-gold setting glints. Skin: porcelain warm. Subtle
gold ring on ring finger. Soft north-facing window light, no harsh
shadows. Background blurred ivory marble. 100mm macro, f/2.8, medium
format film texture, Vogue jewellery editorial. Warm cream and
champagne palette, no cool tones. --ar 16:9 --style raw --v 7 --s 250
```

---

## 2. ЧАСЫ · Карточки коллекции

### 2A. Платиновый хронограф крупно (lifestyle)

```
Macro photograph of a luxury Swiss platinum chronograph wristwatch on
a man's wrist, perspective slightly tilted to reveal the dial and
crown. Sub-dials: 30-minute counter at 3, running seconds at 6,
12-hour at 9. Tachymeter bezel, applied gold baton indices, dauphine
hands. Bracelet: brushed and polished platinum links. Skin warm tan,
subtle vein detail, sleeve of an off-white cashmere sweater. Light
from a single softbox, gold reflector for warmth. 100mm macro, f/4.5.
Editorial luxury watch advertising, Hodinkee studio aesthetic.
Background: cream travertine wall slightly out of focus. --ar 4:5
--style raw --v 7 --s 300
```

### 2B. Скелетонизированный турбийон

```
Macro close-up of a luxury skeletonised tourbillon wristwatch, titanium
and ceramic case, openworked dial revealing the movement, hand-finished
bridges, tourbillon cage at 6 o'clock, blued screws. Black rubber
strap. Resting on cream Italian leather watch tray. Light from a large
diffused softbox above and a warm rim from camera left. Shallow focus
on the tourbillon cage, the rest of the dial gently soft. 100mm macro,
f/3.2, Phase One IQ4 quality. Subtle warm tone, no cyan. Catalogue
photography for a Swiss haute horlogerie maison. --ar 4:5 --style raw
--v 7 --s 300
```

### 2C. Розовое золото на руке зрелого мужчины

```
A close-up of a 55-year-old man's wrist (silver-stubbled forearm,
discreet leather thread bracelet) wearing an elegant rose-gold
perpetual calendar wristwatch with a salmon dial, applied dot indices,
moon-phase aperture at 6 o'clock, brown alligator strap. He rests his
hand on a quarter-sawn walnut desk. Vintage atlas open in soft focus
behind. Window light from left, golden hour, dust motes. 85mm f/1.8,
medium format film grain, Vogue Hommes editorial mood. Warm caramel
and ivory palette. --ar 4:5 --style raw --v 7 --s 250
```

---

## 3. УКРАШЕНИЯ · Карточки коллекции

### 3A. Колье High Jewellery на женской шее (крупно)

```
Editorial close-up of a woman's décolletage and lower neck, wearing a
high-jewellery diamond and emerald necklace with a panther-motif
pendant, white-gold setting, pavé diamonds, two oval emerald eyes,
black-onyx muzzle. Skin: porcelain warm, subtle natural collarbone
shadow. Hair pulled back, blurred. Outfit: ivory silk crêpe blouse,
neckline open. Light: soft north window, gold reflector. 100mm macro,
f/2.8. Vogue High Jewellery editorial, Helmut Newton refinement
without harshness. Cream and champagne palette. --ar 4:5 --style raw
--v 7 --s 300
```

### 3B. Кольцо на пальце

```
Macro close-up of a woman's hand, platinum solitaire ring with a
flawless 8-carat round-brilliant diamond, six-prong setting, slim
band, pavé halo. Manicured nude almond nails. Hand resting on a
folded ivory cashmere throw. Subtle natural ring crease, no excessive
retouching. Soft daylight, single window, warm gold reflector hidden
out of frame. 100mm macro, f/4, focus-stacked. Editorial Christie's
auction catalogue style, archival realism. Warm cream grading. --ar
1:1 --style raw --v 7 --s 300
```

### 3C. Серьги на лице (lifestyle, крупный план)

```
Close-up portrait of a 30-year-old woman, soft natural beauty, faint
freckles, porcelain skin with warm undertones, light hazel eyes,
relaxed half-smile. She wears long high-jewellery butterfly-silhouette
diamond earrings with a fancy pink centre stone, platinum setting.
Hair: low chignon, a few loose strands. Outfit hint: ivory silk
camisole strap visible. Background: very soft beige plaster wall.
Window light from camera right, gold reflector from below. 85mm f/1.4,
shallow focus on the earring's central stone. Vogue beauty editorial,
medium format film, Kodak Portra 400. Warm and gentle, no cyan, no
green skin. --ar 4:5 --style raw --v 7 --s 300
```

### 3D. Браслет Serpenti / змеиная посадка

```
Macro shot of a woman's wrist wearing a high-jewellery serpent-shape
diamond bracelet, rose-gold body, pavé diamonds, two ruby cabochon
eyes, articulated tail wrapping the wrist twice. Skin: warm beige,
delicate bone structure, no other jewellery. Hand resting palm-down on
a cream silk pillow. Soft tent lighting from above, gold accent from
below. 100mm macro, f/3.5. High-jewellery catalogue aesthetic, Bvlgari
heritage editorial reference (without naming brand). Cream and
champagne palette. --ar 4:5 --style raw --v 7 --s 300
```

---

## 4. LIFESTYLE · Атмосферные кадры

### 4A. Salon · клиент примеряет часы

```
Wide editorial scene inside a private luxury watch salon. A 50-year-old
businessman in a charcoal bespoke suit and ivory shirt, no tie, sits
at a Macassar ebony table opposite a sommelier in tonal beige. The
sommelier offers a tray of three luxury wristwatches on cream suede.
Crystal glass of single-malt whisky, leather portfolio, brass desk
lamp casting warm pool of light. Background: book-matched walnut
panels, blurred. Shot on Hasselblad, 50mm f/2, medium format film.
Editorial Cigar Aficionado meets How To Spend It. Warm, intimate,
amber tones. --ar 16:9 --style raw --v 7 --s 250
```

### 4B. Ателье · работа мастера

```
Close-up over-the-shoulder shot of a watchmaker's hands at a
traditional horological workbench, holding a brass tweezer, manipulating
a tiny tourbillon component under a loupe. Dust covers, miniature
screwdrivers, bottles of oil. Soft warm light from a single workbench
lamp. The watchmaker wears a cream linen smock, faded blue cotton
sleeve. 85mm f/2.8, shallow focus on the tweezer tip. Documentary
craftsmanship aesthetic, Master Watchmakers magazine. Warm cream and
brass palette. --ar 16:9 --style raw --v 7 --s 250
```

### 4C. Tray flatlay · подборка для клиента

```
Top-down flatlay on cream linen: three luxury wristwatches arranged
diagonally — one platinum chronograph, one rose-gold dress watch on a
brown alligator strap, one steel sports watch on integrated bracelet.
A high-jewellery diamond ring and a pair of pearl-and-diamond earrings
to the right. A leather-bound provenance booklet, a glass loupe, a
Montblanc-style fountain pen (no logo), a folded ivory silk pouch.
Soft daylight from upper left, gentle warm gold rim. 35mm tilt-shift
giving everything in focus. Editorial Robb Report flatlay. Warm cream
and gold palette, no cool tones. --ar 16:9 --style raw --v 7 --s 250
```

---

## 5. ПОРТРЕТЫ · Лица для секций «О бренде» и «Команда»

### 5A. Эксперт-сомелье часов (мужчина)

```
Editorial portrait of a 45-year-old man, salt-and-pepper short hair,
trimmed beard, warm hazel eyes, calm expression. Wears a tonal beige
cashmere turtleneck and a luxury rose-gold dress watch on his left
wrist (visible). Sits in a leather club chair in a private salon,
shallow background of warm walnut panelling and a brass sconce. Window
light from camera left. 85mm f/1.4, medium format Kodak Portra 400.
Vogue Hommes / Monocle aesthetic, warm and intelligent. --ar 4:5
--style raw --v 7 --s 250
```

### 5B. Геммолог (женщина)

```
Editorial portrait of a 38-year-old woman, dark blonde hair pulled
into a soft low chignon, fine bone structure, warm porcelain skin,
hazel eyes. Wears a cream silk blouse and small platinum drop earrings
with a single pear-shaped diamond. Holds a jeweller's loupe to her
left eye, examining a piece of jewellery (out of focus). Background:
ivory plaster wall, blurred velvet curtain. Soft north window light,
gold reflector from below. 85mm f/1.4. Christie's specialist portrait
style, refined and credible. --ar 4:5 --style raw --v 7 --s 250
```

---

## 6. ПОРТРЕТЫ КЛИЕНТОК · Большие лица для блоков (как на референсе)

### 6A. Молодая женщина с серьгами и колье (большое лицо)

```
Large editorial beauty close-up of a 28-year-old woman, oval face,
porcelain warm skin, soft natural makeup with golden eyeshadow, full
nude lips, hazel-green eyes, gentle direct gaze. Wears a high-
jewellery diamond riviera choker and a pair of cascade diamond
earrings, platinum settings. Hair: glossy chestnut, side-swept. Outfit
hint: ivory silk slip strap. Background: warm cream stucco wall, soft
shadow. Light: north-facing window, warm gold bounce. 85mm f/1.4,
sharp focus on eyes, Hasselblad medium-format colour. Vogue beauty
editorial. Warm cream and champagne palette only. --ar 4:5 --style
raw --v 7 --s 300
```

### 6B. Зрелая женщина в украшениях (heritage feel)

```
Large editorial portrait of a 50-year-old woman, refined features,
silver-streaked dark hair in a low chignon, calm slight smile, hazel
eyes, minimal makeup. Wears a high-jewellery sapphire-and-diamond
brooch on a cream silk wrap blouse. Diamond stud earrings. Hands
resting in lap, one bearing a 6-carat emerald-cut diamond ring.
Background: out-of-focus bookcase of leather-bound atlases, warm
brass picture light. 85mm f/1.6, medium-format film. Annie Leibovitz
Vanity Fair refinement. Warm cream and amber palette. --ar 4:5 --style
raw --v 7 --s 250
```

---

## Где использовать на сайте

| Промпт | Раздел сайта |
|---|---|
| **1A** Мужская рука с часами | Hero / fullwidth выше fold |
| **1B** Колье на бархате | Альт. hero / разделитель Watches → Jewelry |
| **2A · 2B · 2C** | Карточки в секции `#watches` (заменяют SVG-иллюстрации) |
| **3A · 3B · 3C · 3D** | Карточки в секции `#jewelry` |
| **4A · 4B · 4C** | Atelier / About — большой кадр между блоками |
| **5A · 5B** | Команда / эксперты в About |
| **6A · 6B** | Большие лица как у `kindredofireland.com` — между секциями для дыхания |

## Технические параметры рендера

- **Hero (16:9 / 21:9):** генерировать в **2880×1620** или **3600×1543**, далее даунсайз в WebP/AVIF.
- **Карточки (4:5):** **1600×2000**, выдавать в `next/image` (он сделает AVIF/WebP).
- **Beauty close-ups (4:5):** **2400×3000**, ретушь selectively (кожа +retain texture, blemish removal).

## Ретушь и единство стиля

После генерации привести все фото к **одной палитре**, чтобы сайт смотрелся как одна съёмка:
- Capture One / Lightroom: **Temp +250, Tint +3, Highlights -25, Shadows +20, Whites +10, Blacks -10**
- Профиль: **Portra 400** или **Cinestill 400D** (в Capture One — Film Curves)
- Зерно: subtle, 8–12 на full-frame
- Скин-тон: HSL — Orange Lightness +5, Red Saturation -8 (убрать «варёные» лица AI)

## Юридическая аккуратность

- AI-фото с придуманными лицами — **OK для коммерции** (Midjourney Pro / Flux Pro / Imagen 4). Проверить лицензию подписки.
- **Не** генерируем людей, похожих на реальных селебрити.
- **Не** называем бренды Rolex / Cartier и т.д. в промптах — описывать стиль и форму.
