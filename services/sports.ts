import { prisma } from "@/prisma/db";

export function findSports() {
  return prisma.sport.findMany();
}
