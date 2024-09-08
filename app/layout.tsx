import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siga seu Atleta",
  description: "Lista de atletas para olímpicos e paralímpicos do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${darkerGrotesque.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
