export const dynamic = 'force-dynamic';

import { getAllSongs } from '@/lib/songs';
import Link from 'next/link'
import SongList from '../components/songList';
import { Song } from '@/types/songs';

export default async function SongsList() {
  const songs: Song[] = await getAllSongs()
  
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Home</Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Songs</h1>
      <p className="mt-2 text-muted-foreground">Pick a song to view and manipulate its chords.</p>
      <SongList songs={songs} />
      
    </div>
  );
}