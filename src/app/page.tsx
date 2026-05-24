import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/open_chords.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
        <div className="relative">
          <div className="absolute inset-0 lg:-left-88 left-0 w-full h-full">
            <Image
              src={Logo}
              alt="Open chords logo"
              className="z-1 top-0 opacity-33 lg:object-contain object-cover h-full" 
              preload={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div className="relative z-1">
            <h1 className="text-2xl font-sans font-bold tracking-tight text-muted-foreground text-open-chord-logo">
              Open chords
            </h1>
            <h2 className="mt-3  text-4xl font-bold tracking-tight">
              Your open source chord book
            </h2>
            <h3 className="mt-4 text-6xl font-bold tracking-tight">
              Play it your own way.
            </h3>
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

              <Link
                href="/admin"
                className="rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-accent"
              >
                Admin dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
