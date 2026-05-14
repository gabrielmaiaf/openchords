import { Song } from "@/types/songs";

export const songs: Song[] = [
    {
      slug: "ao-orarmos-senhor",
      title: "Ao Orarmos, Senhor",
      artist: "Corinhos Evangélicos",
      key: "D",
      chordPro: `{title: Ao Orarmos, Senhor}
  {artist: Corinhos Evangélicos}
  {key: D}
  
  {comment: Intro}
  [D] [D7] [Em] [Em7] [A] [A7] [D] [A]
  
  [D]Ao or[D7]armos, Senh[Em]or, [Em7]
  Vem en[A]cher-nos com [A7]Teu am[D]or, [D7]
  Para o [Bm]mundo agi[Bm7]tado esquec[Em]er, [Em7]
  Cada d[A]ia Tua v[A7]ida viv[D]er. [D7]
  Nossas v[G]idas vem, p[A]ois, transf[F#m]ormar,
  Refri[Bm]gério pra [G]alma nos d[E]á, [A] [A7]
  E ag[D]ora, com [D7]outros irm[Em]ãos [Em7]
  Nos un[A]irmos aq[A7]ui em ora[D]ção [G] [Gm] [D]
  `,
    },
    {
      slug: "amazing-grace",
      title: "Amazing Grace",
      artist: "John Newton",
      key: "G",
      chordPro: `{title: Amazing Grace}
  {artist: John Newton}
  {key: G}
  
  A[G]mazing grace, how [G7]sweet the [C]sound,
  That [G]saved a wretch like [D]me.
  I [G]once was lost, but [G7]now am [C]found,
  Was [G]blind but [D]now I [G]see.
  `,
    },
  ];

  export const getSong = (slug: string) => songs.find((s) => s.slug === slug);