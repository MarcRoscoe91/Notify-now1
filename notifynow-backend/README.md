# Notify Now — Backend (Vercel)

Express app running on Vercel serverless functions.

## Endpoints
- `GET /api` → health (proxied to Express `GET /`)
- `POST /api/auth/magic-link` → returns a magic link (logs it)
- `GET /api/auth/verify?token=...` → verifies token
- `GET /api/items` → list in-memory items
- `POST /api/items` → add item

## Local
```bash
npm install
npx vercel dev
# open http://localhost:3000/api
```

## Deploy
Connect this folder as a project in Vercel (root: `notifynow-backend`). Add env var `JWT_SECRET`.
