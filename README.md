# The Kawai Store

Premium dark × pink × kawaii digital marketplace built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Structure

- `app/` — routes and pages
- `components/` — reusable UI
- `lib/products.ts` — editable product catalog
- `lib/categories.ts` — category data
- `lib/faq.ts` — FAQ data
- `lib/reviews.ts` — demo review records
- `.env.example` — backend/payment environment placeholders

## Important launch notes

- Product values are editable demo catalog data.
- Statistics are explicitly demo/editable values.
- Reviews are explicitly demo placeholders and must be replaced with genuine reviews.
- Checkout intentionally does not claim payment success. Connect a real payment provider and server-side verification before enabling payment completion.
- Legal pages are placeholders and should be replaced with final store-approved content.
- No external product images are required; product visuals are CSS-based and therefore do not break.
- Discord: https://discord.gg/bda6V274PT
