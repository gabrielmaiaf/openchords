<p align="center">
<img src="public/assets/open_chords.svg" alt="Open chords logo" width=300 />
</p>

# Open Chords

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/openchords)

This is a chord book open source, that you can bring your own chords and playing without any interruptions/ads.

All the chords should be using [ChordPro standard](https://songbook-pro.com/docs/manual/chordpro/) as text type

## Fork and Deploy your own Open Chords project
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgabrielmaiaf%2Fopenchords&env=openchord_db_DATABASE_URL,DIRECT_URL,PRISMA_CLIENT_ENGINE_TYPE,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY&envDefaults=%7B%22PRISMA_CLIENT_ENGINE_TYPE%22%3A%22library%22%7D&envDescription=Env%20variables%20needed%20for%20integration%20with%20Supabase&demo-title=Open%20Chords&demo-description=Your%20open%20source%20chord%20book%2C%20play%20it%20your%20own%20way.&demo-url=https%3A%2F%2Fopenchords.vercel.app%2F&demo-image=https%3A%2F%2Fopenchords.vercel.app%2F_next%2Fstatic%2Fmedia%2Fopen_chords.0nmenhxsulip-.svg)

## Getting Started

Run the following commands:

```bash
git clone
pnpm install
npx supabase start
pnpm prisma generate
```

## Roadmap
- Chord converter (CLI or drag and drop)
- Set list
- Chord search
- Show chord positions on chord sheet
- Refine editing