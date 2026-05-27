import prisma from './prisma';
import crypto from 'crypto';

export async function getAllSongs() {
  return await prisma.song.findMany({
    orderBy: { title: 'asc' }
  });
}

export async function getSong(uuid: string) {
  return await prisma.song.findUnique({
    where: { id: uuid }
  })
}

export async function createSong(data: { title: string, artist?: string, key: string, content: string, language: string }) {
  console.log("Creating song with data:", data);
  const songId = crypto.randomUUID();
  return await prisma.song.create({
    data: {
      id: songId,
      title: data.title,
      artist: data.artist,
      key: data.key,
      content: data.content,
      language: data.language
    }
  })
}

export async function updateSong(uuid: string, data: { title?: string, artist?: string, key?: string, content?: string, language?: string }) {
  return await prisma.song.update({
    where: { id: uuid },
    data: {
      title: data.title,
      artist: data.artist,
      key: data.key,
      content: data.content,
      language: data.language
    }
  })
}

export async function deleteSong(uuid: string) {
  return await prisma.song.delete({
    where: { id: uuid }
  })
}