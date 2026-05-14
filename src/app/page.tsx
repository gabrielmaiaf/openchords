import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
        <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Open chords
        </span>
        <h1 className="mt-4 text-6xl font-bold tracking-tight">
          Play it your way.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Browse chord sheets, transpose on the fly, switch between sharps and flats,
          and tune the typography to match your stage setup.
        </p>
        <div className="mt-10 flex gap-3">
          <Link
            href="/songs"
            className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse all songs →
          </Link>
        </div>
      </div>
    </div>
  );
}
