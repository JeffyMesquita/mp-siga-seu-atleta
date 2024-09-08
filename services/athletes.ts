import { prisma } from "@/prisma/db";
import { Athlete } from "@prisma/client";

export type AthleteWithSport = Athlete & {
  sport: {
    name: string;
  };
};

export function findAthletes() {
  return prisma.athlete.findMany({
    include: {
      sport: {
        select: {
          name: true,
        },
      },
    },
  });
}
