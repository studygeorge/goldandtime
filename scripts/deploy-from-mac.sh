#!/usr/bin/env bash
# Деплой с локального Mac на сервер.
# Локально → rsync → сервер → git push в GitHub → docker compose build/up.
#
# Требует: sshpass + переменную SERVER_PASS (или ввод пароля).
# Использование:  ./scripts/deploy-from-mac.sh

set -euo pipefail

SERVER="root@194.67.101.80"
REMOTE_DIR="/home/goldandtime.ru"
LOCAL_DIR="$(cd "$(dirname "$0")/.." && pwd)"

if [ -z "${SERVER_PASS:-}" ]; then
  echo "SERVER_PASS не задана. Используй: SERVER_PASS=... ./scripts/deploy-from-mac.sh"
  exit 1
fi

cd "$LOCAL_DIR"

echo "==> [1/5] локальный коммит (если есть незакоммиченные изменения)"
if [ -n "$(git status --porcelain)" ]; then
  echo "    есть несохранённые изменения, делаю commit"
  git add -A
  git commit -m "chore: deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
fi

echo "==> [2/5] rsync на сервер (с --delete)"
rsync -avz --delete \
  --exclude='node_modules' --exclude='.next' --exclude='.DS_Store' \
  -e "sshpass -p '$SERVER_PASS' ssh -o StrictHostKeyChecking=no" \
  "$LOCAL_DIR/" "$SERVER:$REMOTE_DIR/" | tail -5

echo "==> [3/5] восстанавливаю git remote и пушу в GitHub"
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER" "
  set -e
  cd $REMOTE_DIR
  chown -R root:root .
  git config user.email 'deploy@goldandtime.ru'
  git config user.name 'Gold & Time Deploy'
  git remote remove origin 2>/dev/null || true
  git remote add origin git@github.com-goldandtime:studygeorge/goldandtime.git
  git push -u origin main 2>&1 | tail -5 || true
"

echo "==> [4/5] docker compose build + up"
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER" "
  set -e
  cd $REMOTE_DIR
  docker compose build 2>&1 | tail -3
  docker compose up -d --remove-orphans 2>&1 | tail -3
  sleep 3
  docker compose ps
"

echo "==> [5/5] проверка"
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER" "
  curl -sS -o /dev/null -w '127.0.0.1:3010 → HTTP %{http_code}\n' http://127.0.0.1:3010/
  curl -sS -o /dev/null -w 'goldandtime.ru via nginx → HTTP %{http_code}\n' -H 'Host: goldandtime.ru' http://127.0.0.1/
"

echo "✓ done"
