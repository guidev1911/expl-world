import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="page-section page-shell centered-state">
      <span className="centered-state__code">404 · NÃO ENCONTRADO</span>
      <h1>Este caminho ainda não existe.</h1>
      <p>O conteúdo pode ter mudado ou ainda não está nesta prévia do EXPL WORLD.</p>
      <Link className="button button--outline" href="/">
        <ArrowLeft size={15} aria-hidden="true" /> Voltar para o início
      </Link>
    </main>
  );
}
