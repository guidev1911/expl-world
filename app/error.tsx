"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="page-section page-shell centered-state">
      <span className="centered-state__code">ERRO INESPERADO</span>
      <h1>Não foi possível carregar esta página.</h1>
      <p>Tente novamente. Se o problema continuar, volte mais tarde.</p>
      <button className="button button--outline" type="button" onClick={() => retry()}>
        <RefreshCw size={15} aria-hidden="true" /> Tentar novamente
      </button>
    </main>
  );
}
