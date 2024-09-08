"use client";

import { Athlete } from "@prisma/client";

type AthletesListProps = {
  initialData: Athlete[];
};

export function AthletesList({ initialData }: AthletesListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {initialData.map((athlete) => (
        // <AthleteCard key={athlete.id} athlete={athlete} />
        <div key={athlete.id} className="bg-stone-50 p-4 rounded shadow-md">
          {athlete.name}
        </div>
      ))}
    </div>
  );
}
