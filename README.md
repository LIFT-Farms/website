# LiFT Farms Website

Website for [LiFT Farms](https://farm.liftgroup.online), built with Next.js and deployed on Vercel.

## Setup

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env   # then fill in the values below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands: `npm run build` (production build), `npm run start` (serve the build), `npm run lint`.

## Environment variables

The contact, investment and order forms send emails over SMTP (`app/api/send/route.ts`). Set these in `.env` locally and in the Vercel project settings for production.

| Variable        | Description                                  |
| --------------- | -------------------------------------------- |
| `SMTP_HOST`     | SMTP server hostname                         |
| `SMTP_PORT`     | SMTP port, e.g. `465` or `587`               |
| `SMTP_SECURE`   | `true` for port 465, `false` otherwise       |
| `SMTP_USER`     | SMTP username                                |
| `SMTP_PASS`     | SMTP password                                |
| `SMTP_FROM`     | Sender address on outgoing emails            |
| `DEFAULT_EMAIL` | Inbox that receives form submissions         |

Don't commit `.env`; it's git-ignored.

## Adding a page

1. Create `app/(main)/<name>/page.tsx`.
2. Add a `layout.tsx` next to it that sets the page's title and description with `pageMetadata()` from `lib/seo.ts`.
3. Add the route to `app/sitemap.ts`, and to the nav links in `lib/constant.ts` if needed.

## Deployment

Pushing to `main` deploys to Vercel. The Vercel project's Framework Preset must be **Next.js**.
