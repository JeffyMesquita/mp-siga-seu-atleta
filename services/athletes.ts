import { prisma } from "@/prisma/db";

export function findAthletes() {
  return prisma.athlete.findMany();
}
