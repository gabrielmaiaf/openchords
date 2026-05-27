import Link from "next/link";
import { redirect } from "next/navigation";
import { SongForm } from "@/app/components/songForm";
import { createSong } from "@/lib/songs";

export default function NewSongPage() {
    const handleSubmit = async (data: { title: string, artist?: string, key: string, content: string, language: string }) => {
      "use server";
      await createSong(data);
      redirect(`/admin`);
    }

    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">← Admin</Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">New song</h1>
        <p className="mt-1 text-muted-foreground">Compose a chord sheet using ChordPro syntax.</p>
        <div className="mt-8">
          <SongForm mode="create" onSubmit={handleSubmit} />
        </div>
      </div>
    );
  }