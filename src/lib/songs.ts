import prisma from './prisma';

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