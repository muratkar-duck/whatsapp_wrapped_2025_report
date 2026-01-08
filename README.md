# WhatsApp Wrapped 2025

Mobile-first, section-based WhatsApp Wrapped experience built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Stickers

- Place all WhatsApp sticker `.webp` files into `public/stickers/`
- Files can be drag & dropped directly
- They will be accessible at `/stickers/<filename>.webp`

## Hardcoded Data

Update v1 content in:
- `lib/data/wrapped2025.ts`
- `lib/types.ts`

## Data Ingestion (WhatsApp Export)

1. Put your WhatsApp export in `data/raw/chat.txt`.
2. Run `npm run ingest` to generate `lib/data/wrapped2025.generated.ts`.
3. Deploy as usual.

## Vercel Deploy

1. Push the repository to GitHub.
2. Import the repo into Vercel and deploy.

### Password Protection (no code)

Use Vercel Dashboard settings:
- Go to **Project Settings → Deployment Protection**.
- Enable **Password Protection** for Production (and Preview if desired).
- No in-app login UI is required or implemented.

## Project Structure

```
app/
  layout.tsx
  page.tsx
components/
  wrapped/
    WrappedShell.tsx
    Section.tsx
    ProgressDots.tsx
  sections/
    01Cover.tsx
    02Summary.tsx
    03Tempo.tsx
    04Monthly.tsx
    05Hourly.tsx
    06Weekday.tsx
    07ReplyTime.tsx
    08Streaks.tsx
    09BusiestCalmest.tsx
    10WordCloud.tsx
    11EmojisStickers.tsx
    12Topics.tsx
    13TopPhrases.tsx
    14Laugh.tsx
    15Romance.tsx
    16CallsMedia.tsx
    17Dates.tsx
    18WeeklyHighlights.tsx
    19Closing.tsx
    20ArchiveReady.tsx
  charts/
    CanvasBarMonth.tsx
    CanvasBarHours.tsx
    CanvasBarWeekdays.tsx
    CanvasHistogram.tsx
    CanvasWordCloud.tsx
lib/
  data/
    index.ts
    wrapped2025.ts
    wrapped2025.generated.ts
  types.ts
  canvas/
    draw.ts
    scale.ts
data/
  raw/
    chat.txt
    .gitkeep
scripts/
  parse-whatsapp.ts
```
