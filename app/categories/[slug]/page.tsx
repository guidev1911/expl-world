
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ArticleCard } from "@/components/common/article-card";
import { TopicCard } from "@/components/common/topic-card";
import { articles, getTopicsByCategory } from "@/data/mock-content";
import { getCategoryBySlug } from "@/services/category.service";
export const instant = false;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const category = await getCategoryBySlug(slug);

    return {
      title: category.name,
      description: category.description ?? `Explore conteúdos sobre ${category.name}.`,
    };
  } catch {
    return { title: "Categoria não encontrada" };
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  let category;

  try {
    category = await getCategoryBySlug(slug);
  } catch {
    notFound();
  }

  const categoryTopics = getTopicsByCategory(slug);
  const categoryArticles = articles.filter(
    (article) => article.categorySlug === slug,
  );

  return (
    <main className="page-section page-shell">
      <nav className="breadcrumb" aria-label="Caminho da página">
        <Link href="/">Início</Link>
        <ChevronRight size={13} aria-hidden="true" />
        <span>{category.name}</span>
      </nav>

      <section className="editorial-hero">
        {category.imageUrl && (
          <Image
            className="editorial-hero__image"
            src={category.imageUrl}
            alt={category.name}
            fill
            sizes="(max-width: 700px) 100vw, 1200px"
            priority
          />
        )}

        <div className="editorial-hero__content editorial-heading">
          <p className="eyebrow">
            <span className="eyebrow__mark" /> Explore o tema
          </p>
          <h1>
            {category.name} <span>em foco.</span>
          </h1>
          <p className="editorial-heading__description">
            {category.description ?? `Explore conteúdos sobre ${category.name}.`}
          </p>
        </div>
      </section>

      <div className="demo-notice">
        <span className="eyebrow__mark" aria-hidden="true" />
        Conteúdo demonstrativo: estes tópicos e artigos são exemplos editoriais,
        não dados da API.
      </div>

      <section aria-labelledby="topics-heading">
        <div className="subsection-heading">
          <h2 id="topics-heading">Explore os tópicos</h2>
          <p>{categoryTopics.length} assuntos para começar</p>
        </div>

        {categoryTopics.length > 0 ? (
          <div className="topic-grid">
            {categoryTopics.map((topic) => (
              <TopicCard topic={topic} key={topic.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Novos tópicos desta categoria serão adicionados em breve.</p>
          </div>
        )}
      </section>

      <section aria-labelledby="category-articles-heading">
        <div className="subsection-heading">
          <h2 id="category-articles-heading">Leituras em destaque</h2>
          <Link className="text-link" href="/#latest">
            Ver todas <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        {categoryArticles.length > 0 ? (
          <div className="article-grid">
            {categoryArticles.map((article, index) => (
              <ArticleCard article={article} index={index} key={article.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Novos artigos desta categoria serão adicionados em breve.</p>
          </div>
        )}
      </section>
    </main>
  );
}
