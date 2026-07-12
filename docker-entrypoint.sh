#!/bin/sh
set -e

mkdir -p "$(dirname "${DATABASE_URL#file:}")" 2>/dev/null || true

npx prisma db push --skip-generate

exec node server.js
