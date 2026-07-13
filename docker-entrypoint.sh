#!/bin/sh
set -e

mkdir -p "$(dirname "${DATABASE_URL#file:}")" 2>/dev/null || true

node node_modules/prisma/build/index.js db push --skip-generate

exec node server.js
