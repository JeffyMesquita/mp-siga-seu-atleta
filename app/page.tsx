import { findAthletes } from "@/services/athletes";
import { findSports } from "@/services/sports";
import { AthletesList } from "./_components/AthletesList";
import { Suspense } from "react";

export default async function Home() {
  const athletes = await findAthletes();
  const sports = await findSports();
  console.log("Home", athletes, sports);

  return (
    <main className="p-4 flex flex-col gap-12">
      <Suspense
        key={"qualquer-valor"}
        fallback={
          <div className="flex justify-center items-center h-64">
            Carregando...
          </div>
        }
      >
        <AthletesList initialData={athletes} />
      </Suspense>
    </main>
  );
}
