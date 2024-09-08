import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export function About() {
  return (
    <Dialog>
      <DialogTrigger>Sobre</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sobre o projeto</DialogTitle>
          <DialogDescription>
            <p>
              Esse é um projeto open source desenvolvido pela comunidade
              <Link
                href="https://codante.io"
                target="_blank"
                className="text-yellow-500 hover:underline font-bold"
                prefetch={false}
              >
                Codante.io
              </Link>
              com o objetivo de ajudar atletas a se conectarem com seus fãs.
            </p>
            <br />
            <p>
              Se você encontrou alguma informação incorreta ou sentiu falta de
              algum atleta, por favor, nos avise para que possamos corrigir no
              email: <span className="font-bold">contato@codante.io</span>{" "}
            </p>
            <br />
            <p>
              O Codante.io é uma comunidade de desenvolvedores que tem como foco
              a troca de conhecimento e a criação de projetos open source. Se
              você é desenvolvedor e quer fazer parte da comunidade, acesse o
              nosso site:{" "}
              <Link
                href="https://codante.io"
                target="_blank"
                className="text-yellow-500 hover:underline font-bold"
                prefetch={false}
              >
                Codante.io
              </Link>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
