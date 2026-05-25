import { useState, useEffect } from "react";
import { SongForm } from "@/app/components/songForm";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getSong } from "@/lib/songs";

export default function EditSongPage() {
  const { slug } = useParams();
  const [song, setSong] = useState<Awaited<ReturnType<typeof getSong>> | null>(null);

  useEffect(() => {
    const fetchSong = async () => {
      const fetchedSong = await getSong(slug as string);
      setSong(fetchedSong);
    };
    fetchSong();
  }, [slug]);

  if (song === null) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">← Admin</Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Loading...</h1>
      </div>
    );
  }

  if (!song) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">← Admin</Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Song not found</h1>
        <p className="mt-2 text-muted-foreground">
          This song doesn&apos;t exist. <Link href="/admin" className="text-primary underline">Back to admin</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">← Admin</Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        {song ? `Edit: ${song.title}` : "Song not found"}
      </h1>
      <div className="mt-8">
        {song ? (
          <SongForm mode="edit" initial={song} />
        ) : (
          <p className="text-muted-foreground">
            This song doesn&apos;t exist. <Link href="/admin" className="text-primary underline">Back to admin</Link>.
          </p>
        )}
      </div>
    </div>
  );
}