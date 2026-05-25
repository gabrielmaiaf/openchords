import Link from "next/link";
import { SongForm } from "@/app/components/songForm";

export default function NewSongPage() {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">← Admin</Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">New song</h1>
        <p className="mt-1 text-muted-foreground">Compose a chord sheet using ChordPro syntax.</p>
        <div className="mt-8">
          <SongForm mode="create" />
        </div>
      </div>
    );
  }