"use client"
import { useEffect, useMemo, useState } from "react";
import ChordSheetJS from "chordsheetjs";
const { ChordProParser, HtmlDivFormatter } = ChordSheetJS;
type Song = InstanceType<typeof ChordSheetJS.Song>;

type Props = { chordPro: string; songKey?: string };

const SHARP_KEYS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT_KEYS  = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export function ChordViewer({ chordPro, songKey = "C" }: Props) {
  const [transpose, setTranspose] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [useFlats, setUseFlats] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const html = useMemo(() => {
    try {
      const parsed: Song = new ChordProParser().parse(chordPro);
      const transposed = parsed.transpose(transpose);
      const modifierKeys = useFlats ? FLAT_KEYS : SHARP_KEYS;
      // pick a target key based on original key + transpose
      const baseIndex = SHARP_KEYS.indexOf(songKey.replace("b", "").replace(/m$/, ""));
      const targetKey = baseIndex >= 0 ? modifierKeys[(baseIndex + transpose + 12) % 12] : songKey;
      const finalSong = transposed.setKey(targetKey);
      return new HtmlDivFormatter().format(finalSong);
    } catch (e) {
      return `<pre>${(e as Error).message}</pre>`;
    }
  }, [chordPro, transpose, useFlats, songKey]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-card p-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setTranspose((t) => t - 1)}
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent"
          >
            ♭ Transpose
          </button>
          <span className="min-w-12 text-center text-sm font-mono">
            {transpose > 0 ? `+${transpose}` : transpose}
          </span>
          <button
            onClick={() => setTranspose((t) => t + 1)}
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent"
          >
            ♯ Transpose
          </button>
          <button
            onClick={() => setTranspose(0)}
            className="ml-1 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            reset
          </button>
        </div>

        <div className="mx-2 h-6 w-px bg-border" />

        <div className="flex items-center gap-1">
          <button
            onClick={() => setFontSize((s) => Math.max(12, s - 2))}
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent"
          >
            A−
          </button>
          <span className="min-w-10 text-center text-sm font-mono">{fontSize}px</span>
          <button
            onClick={() => setFontSize((s) => Math.min(32, s + 2))}
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent"
          >
            A+
          </button>
        </div>

        <div className="mx-2 h-6 w-px bg-border" />

        <button
          onClick={() => setUseFlats((v) => !v)}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          {useFlats ? "Use ♯ sharps" : "Use ♭ flats"}
        </button>
        <button
          onClick={() => setUppercase((v) => !v)}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          {uppercase ? "lowercase lyrics" : "UPPERCASE LYRICS"}
        </button>

        <div className="mx-2 h-6 w-px bg-border" />

        <button
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
      </div>

      <div
        className="chord-sheet rounded-xl border border-border bg-card p-6 leading-relaxed"
        style={{ fontSize, textTransform: uppercase ? "uppercase" : "none" }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}