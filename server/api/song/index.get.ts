import { prisma } from "../../data/prisma";

export default defineEventHandler(async (event) => {
  const allSongs = await prisma.song.findMany();

  console.log(allSongs);
  return allSongs;
});
