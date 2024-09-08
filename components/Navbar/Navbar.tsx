import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 mb-10 w-full bg-red-300">
      <a href="/" className="text-lg font-semibold">
        <Image
          src="/Logo.svg"
          alt="Logo Siga seu Atleta"
          width={200}
          height={200}
          // className="w-48 h-48"
        />
        <div className="flex items-center space-x-4">{/* <About /> */}</div>
      </a>
    </nav>
  );
}
