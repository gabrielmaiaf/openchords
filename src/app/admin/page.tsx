import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
// import Button from "@/app/components/button";
import { Song } from '@/types/songs';
import { getAllSongs } from '@/lib/songs';

export default async function AdminDashboard() {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    const songs: Song[] = await getAllSongs()

    if (error || !user) {
        redirect("/login");
    }
  
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Home</Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="hidden sm:inline">{user.email}</span>
            {/* <button onClick={() => signOut()} className="hover:text-foreground underline">Sign out</button> */}
            <Link href="/songs" className="hover:text-foreground">View public library →</Link>
          </div>
        </div>
  
        <header className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Admin</h1>
            <p className="mt-1 text-muted-foreground">
              {songs.length} song{songs.length === 1 ? "" : "s"} stored locally in this browser.
            </p>
          </div>
          <div className="flex gap-2">
            {/* <Button  onClick={() => { if (confirm("Reset to seed songs?")) songsStore.reset(); }}>
              Reset
            </Button> */}
            <Link
              href="/admin/new"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              + New song
            </Link>
          </div>
        </header>
  
        <section className="mt-8">
          {songs.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
              No songs yet. <Link href="/admin/new" className="text-primary underline">Add your first one</Link>.
            </div>
          ) : (
            <ul className="divide-y divide-border rounded-xl border border-border bg-card">
              {songs.map((s) => (
                <li key={s.id} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="min-w-0">
                    <div className="truncate font-medium">{s.title}</div>
                    <div className="truncate text-sm text-muted-foreground">
                      {s.artist || "—"} · <span className="font-mono">{s.id}</span>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="rounded-md border border-border px-2 py-1 font-mono text-xs">{s.key}</span>
                    <Link
                      href={`/songs/${s.id}`}
                      className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/${s.id}/edit`}
                      className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent"
                    >
                      Edit
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    );
  }