import db from "@/prisma/db";

export default async function Home() {
  const sports = await db.sport.findMany();

  return (
    <main>
      <h1>Home</h1>
      <p>Olá, mundo Next.js!</p>
      <span>Siga seu Atleta</span>
      <ul>
        {sports.map((sport) => (
          <li key={sport.id}>{sport.name}</li>
        ))}
      </ul>
    </main>
  );
}
