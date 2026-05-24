import { useState, SubmitEvent } from "react";
import Link from 'next/link';
import { ChordProEditor } from "../chordProEditor";
import { redirect } from "next/navigation";
import { Song } from '@/types/songs';
import Button from "@/app/components/button";

type Props = {
  initial?: Song;
  mode: "create" | "edit";
};

const blankChordPro = `{title: New Song}
{artist: }
{key: C}

[C]Type your [G]chords like [Am]this and [F]lyrics flow.
`;

export function SongForm({ initial, mode }: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [artist, setArtist] = useState(initial?.artist ?? "");
  const [key, setKey] = useState(initial?.key ?? "C");
//   const [slug, setSlug] = useState(initial?.id ?? "");
  const [chordPro, setChordPro] = useState(initial?.content ?? blankChordPro);
  const [error, setError] = useState<string | null>(null);

//   const computedSlug = slug.trim() || slugify(title);

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setError(null);
    if (!title.trim()) return setError("Title is required");
    // if (!computedSlug) return setError("Slug could not be generated");

    // if (mode === "create" && songsStore.get(computedSlug)) {
    //   return setError("A song with this slug already exists");
    // }

    // songsStore.upsert({
    //   slug: computedSlug,
    //   title: title.trim(),
    //   artist: artist.trim(),
    //   key: key.trim() || "C",
    //   chordPro,
    // });
    // redirect("/songs/$slug", params: { slug: computedSlug } });
  };

  const onDelete = () => {
    if (!initial) return;
    if (!confirm(`Delete "${initial.title}"?`)) return;
    // songsStore.remove(initial.slug);
    redirect("/admin");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="title">Title</label>
          <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="artist">Artist</label>
          <input id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div className="space-y-2">
          <label htmlFor="key">Key</label>
          <input id="key" value={key} onChange={(e) => setKey(e.target.value)} placeholder="C" />
        </div>
        {/* <div className="space-y-2">
          <label htmlFor="slug">Slug</label>
          <input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder={slugify(title) || "auto-from-title"}
            disabled={mode === "edit"}
          />
        </div> */}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label>ChordPro source</label>
          <a
            href="https://www.chordpro.org/chordpro/chordpro-introduction/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            ChordPro reference ↗
          </a>
        </div>
        <ChordProEditor value={chordPro} onChange={setChordPro} />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to admin
        </Link>
        <div className="flex items-center gap-2">
          {mode === "edit" && (
            <Button type="button" onClick={onDelete}>
              Delete
            </Button>
          )}
          <Button type="submit">{mode === "create" ? "Create song" : "Save changes"}</Button>
        </div>
      </div>
    </form>
  );
}