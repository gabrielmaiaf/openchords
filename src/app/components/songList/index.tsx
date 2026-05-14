"use client";
// import { useState, useEffect } from 'react';
import { Song } from '@/types/songs';
// import { getAllSongs } from '@/lib/songs';
import Link from 'next/link';

export default function SongList({ songs }: { songs: Song[] }) {
    // const [songs, setSongs] = useState<Song[]>([])

    // useEffect(() => {
    //     getAllSongs().then(setSongs)
    // }, [])

    return(
        <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {songs.map((s: Song) => (
          <li key={s.id}>
            <Link
              href={`/songs/${s.id}`}
              className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-accent"
            >
              <div>
                <div className="font-medium">{s.title}</div>
                <div className="text-sm text-muted-foreground">{s.artist}</div>
              </div>
              <span className="rounded-md border border-border px-2 py-1 font-mono text-xs">
                key {s.key}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    )
}