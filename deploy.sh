#!/usr/bin/env bash
# Deploy script for goldandtime.ru — выполняется НА СЕРВЕРЕ из /home/goldandtime.ru
set -euo pipefail

cd "$(dirname "$0")"

echo "==> [1/4] git pull"
git pull --ff-only

echo "==> [2/4] docker compose build"
docker compose build --pull

echo "==> [3/4] docker compose up -d"
docker compose up -d --remove-orphans

echo "==> [4/4] cleanup"
docker image prune -f >/dev/null 2>&1 || true

echo
echo "==> status"
docker compose ps

echo
echo "==> done. checking http://127.0.0.1:3010/ ..."
sleep 3
curl -sS -o /dev/null -w "HTTP: %{http_code}\n" http://127.0.0.1:3010/ || true
