import type { Metadata } from "next";
import { Search } from "lucide-react";
import { ArticleCard } from "@/components/common/article-card";
import { articles, getCategoryBySlug } from "@/data/mock-content";

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export const metadata: Metadata = {
  title: "Pesquisar",
  description: "Encontre artigos e descobertas no EXPL WORLD.",
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = Array.isArray(q) ? q[0] ?? "" : q ?? "";
  const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
  const results = normalizedQuery
    ? articles.filter((article) => {
        const category = getCategoryBySlug(article.categorySlug);
        const searchableText = [
          article.title,
          article.description,
          category?.name ?? "",
        ].join(" ").toLocaleLowerCase("pt-BR");

        return searchableText.includes(normalizedQuery);
      })
    : [];

  return (
    <main className="page-section page-shell">
      <div className="search-intro">
        <p className="eyebrow"><span className="eyebrow__mark" /> Busca editorial</p>
        <h1>O que você quer descobrir?</h1>
        <p>Pesquise entre os artigos demonstrativos disponíveis nesta prévia.</p>
      </div>

      {normalizedQuery ? (
        <section className="search-results" aria-live="polite">
          <div className="subsection-heading">
            <h2>Resultados para “{query.trim()}”</h2>
            <p>{results.length} {results.length === 1 ? "artigo" : "artigos"}</p>
          </div>
          {results.length > 0 ? (
            <div className="article-grid">
              {results.map((article, index) => (
                <ArticleCard article={article} index={index} key={article.slug} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>Nenhum artigo encontrado</h2>
              <p>Tente buscar por “animais”, “carros” ou “energia”.</p>
            </div>
          )}
        </section>
      ) : (
        <div className="empty-state">
          <Search size={18} color="var(--accent)" aria-hidden="true" />
          <h2>Comece uma busca</h2>
          <p>Digite um assunto no campo de pesquisa para encontrar artigos demonstrativos.</p>
        </div>
      )}
      <p className="demo-label" style={{ marginTop: 24 }}>
        A pesquisa considera apenas os dados de demonstração desta versão.
      </p>
    </main>
  );
}
