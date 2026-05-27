
"use client"
import { useState, SubmitEvent } from "react";
import Link from 'next/link';
import { ChordProEditor } from "../chordProEditor";
// import { redirect } from "next/navigation";
import { Song } from '@/types/songs';
import Button from "@/app/components/ui/button";
import Label from "../ui/label";
import Input from "../ui/input";

type Props = {
  initial?: Song;
  mode: "create" | "edit";
  onSubmit: (data: { title: string, artist?: string, key: string, content: string, language: string }) => Promise<void>;
  onDelete?: () => Promise<void>;
};

const blankChordPro = `{title: New Song}
{artist: }
{key: C}

[C]Type your [G]chords like [Am]this and [F]lyrics flow.
`;

export function SongForm({ initial, mode, onSubmit, onDelete }: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [artist, setArtist] = useState(initial?.artist ?? "");
  const [key, setKey] = useState(initial?.key ?? "C");
  const [chordPro, setChordPro] = useState(initial?.content ?? blankChordPro);
  const [error, setError] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [language, setLanguage] = useState(initial?.language ?? "en");

  const handleError = (message: string) => {
    setError(message);
    setSubmitLoading(false);
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError(null);
    if (!title.trim()) return handleError("Title is required");
    if (!chordPro.trim()) return handleError("ChordPro content is required");

    onSubmit({
      title: title.trim(),
      artist: artist.trim(),
      key: key.trim() || "C",
      content: chordPro,
      language: language.trim() || "en",
    });
  };

  const handleDelete = () => {
    onDelete?.();
    if (!initial) return;
    if (!confirm(`Delete "${initial.title}"?`)) return;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="artist">Artist</Label>
          <Input id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="key">Key</Label>
          <Input id="key" value={key} onChange={(e) => setKey(e.target.value)} placeholder="C" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lang">Language</Label>
          <Input id="lang" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="en-IE" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>ChordPro content</Label>
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
            <Button type="button" onClick={handleDelete}>
              Delete
            </Button>
          )}
          <Button type="submit" disabled={submitLoading}>{mode === "create" ? "Create song" : "Save changes"}</Button>
        </div>
      </div>
    </form>
  );
}