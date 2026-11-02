import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";

export const metadata: Metadata = {
  title: "Acesso de usuário",
  description: "Informações sobre a futura área de acesso do EXPL WORLD.",
};

export default function LoginPage() {
  return (
    <main className="page-section page-shell centered-state">
      <span className="centered-state__code"><LockKeyhole size={17} aria-hidden="true" /></span>
      <h1>Acesso em preparação.</h1>
      <p>
        O login ainda não está disponível. A autenticação será conectada ao
        backend existente quando o contrato da API estiver confirmado.
      </p>
      <Link className="button button--outline" href="/">
        <ArrowLeft size={15} aria-hidden="true" /> Voltar para o início
      </Link>
    </main>
  );
}
