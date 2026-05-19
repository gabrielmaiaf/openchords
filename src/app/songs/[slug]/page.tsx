export const dynamic = 'force-dynamic';

import { ChordViewer } from "@/components/chordViewer";
import Link from 'next/link';
import { getSong } from "@/lib/songs";

interface PageProps {
  params: Promise<{slug: string}>;
}

export default async function SongPage({ params }: PageProps) {
  const { slug } = await params;
  const song = await getSong(slug)
  if (!song) return <div>Música não encontrada</div>;
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/songs" className="text-sm text-muted-foreground hover:text-foreground">← All songs</Link>
      <header className="mt-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{song.title}</h1>
        <p className="mt-1 text-muted-foreground">
          {song.artist} · Original key <span className="font-mono">{song.key}</span>
        </p>
      </header>
      <ChordViewer chordPro={song.content} songKey={song.key} />
    </div>
  );
}