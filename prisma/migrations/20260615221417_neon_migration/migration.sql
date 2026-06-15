-- CreateTable
CREATE TABLE "song" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT DEFAULT 'Autoral',
    "content" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'pt-BR',
    "key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "song_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "song_title_artist_idx" ON "song"("title", "artist");
