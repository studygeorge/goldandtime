# Gold & Time — goldandtime.ru

Лендинг и интернет-магазин эксклюзивных часов и ювелирных украшений.

**Стек:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Framer Motion · Docker.

---

## Локальная разработка

```bash
npm install
npm run dev
```

Откроется на http://localhost:3000.

## Production-сборка

```bash
npm run build
npm start
```

## Docker

Образ — multi-stage Alpine со standalone-выводом Next.js. На сервере приложение слушает только `127.0.0.1:3010`, наружу проксируется через nginx.

```bash
docker compose build
docker compose up -d
docker compose logs -f web
```

Healthcheck встроен в Dockerfile (`wget http://127.0.0.1:3000/`).

## Деплой на сервер

Сервер: `194.67.101.80`, каталог: `/home/goldandtime.ru`. Репозиторий — `git@github.com:studygeorge/goldandtime.git`, доступ по SSH-ключу `/root/.ssh/goldandtime_deploy`.

Один шаг:

```bash
ssh root@194.67.101.80
cd /home/goldandtime.ru
./deploy.sh
```

Что делает `deploy.sh`:

1. `git pull --ff-only`
2. `docker compose build --pull`
3. `docker compose up -d --remove-orphans`
4. чистка устаревших образов

## Архитектура на сервере

```
                ┌─────────────────────┐
   :443/:80 ──▶│  nginx (host)        │
                │  goldandtime.ru →    │
                │  proxy_pass 3010     │
                └─────────┬───────────┘
                          │ 127.0.0.1:3010
                ┌─────────▼───────────┐
                │  goldandtime-web     │
                │  Docker · Next.js    │
                └─────────────────────┘
```

## Структура

```
src/
  app/
    layout.tsx       — root layout, шрифты, metadata
    page.tsx         — главная (собирает секции)
    globals.css      — токены золотой темы, утилиты, анимации
  components/
    Header.tsx       — фикс. шапка, мобильное меню
    Hero.tsx         — первый экран, hero
    Collections.tsx  — три категории
    Showcase.tsx     — карточки часов и украшений
    About.tsx        — о бренде, четыре столпа
    Contact.tsx      — форма обратной связи
    Footer.tsx       — подвал
```
