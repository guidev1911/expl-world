
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ChevronRight } from "lucide-react";

import { ArticleCard } from "@/components/common/article-card";
import { getCategoryBySlug } from "@/services/category.service";
import { getTopicBySlug } from "@/services/topic.service";
import { getArticlesByTopic } from "@/services/article.service";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: TopicPageProps): Promise<Metadata> {
  const [{ slug }, { category: categorySlug }] = await Promise.all([
    params,
    searchParams,
  ]);

  if (!categorySlug) {
    return { title: "Tópico não encontrado" };
  }

  try {
    const category = await getCategoryBySlug(categorySlug);
    const topic = await getTopicBySlug(category.id, slug);

    return {
      title: topic.name,
      description: topic.description ?? `Explore conteúdos sobre ${topic.name}.`,
    };
  } catch {
    return { title: "Tópico não encontrado" };
  }
}

function TopicLoading() {
  return (
    <main className="page-section page-shell">
      <div className="empty-state">
        <p>Carregando tópico...</p>
      </div>
    </main>
  );
}

async function TopicContent({ params, searchParams }: TopicPageProps) {
  const [{ slug }, { category: categorySlug }] = await Promise.all([
    params,
    searchParams,
  ]);

  if (!categorySlug) notFound();

  let category;
  let topic;

  try {
    category = await getCategoryBySlug(categorySlug);
    topic = await getTopicBySlug(category.id, slug);
  } catch {
    notFound();
  }

  const articlesResponse = await getArticlesByTopic(topic.id);
  const topicArticles = articlesResponse.content;

  return (
    <main className="page-section page-shell">
      <nav className="breadcrumb" aria-label="Caminho da página">
        <Link href="/">Início</Link>
        <ChevronRight size={13} aria-hidden="true" />
        <Link href={`/categories/${category.slug}`}>{category.name}</Link>
        <ChevronRight size={13} aria-hidden="true" />
        <span>{topic.name}</span>
      </nav>

      <section className="editorial-hero">
        {topic.imageUrl && (
          <Image
            className="editorial-hero__image"
            src={topic.imageUrl}
            alt={topic.name}
            fill
            sizes="(max-width: 700px) 100vw, 1200px"
            priority
          />
        )}

        <div className="editorial-hero__content editorial-heading">
          <p className="eyebrow">
            <span className="eyebrow__mark" /> {category.name}
          </p>

          <h1>
            <span className="editorial-heading__plain">{topic.name}</span>
          </h1>

          <p className="editorial-heading__description">
            {topic.description ?? `Explore conteúdos sobre ${topic.name}.`}
          </p>
        </div>
      </section>

      <section aria-labelledby="topic-articles-heading">
        <div className="subsection-heading">
          <h2 id="topic-articles-heading">
            Artigos sobre {topic.name.toLocaleLowerCase("pt-BR")}
          </h2>

          <p>
            Categoria:{" "}
            <Link className="text-link" href={`/categories/${category.slug}`}>
              {category.name}
            </Link>
          </p>
        </div>

        {topicArticles.length > 0 ? (
          <div className="article-grid">
            {topicArticles.map((article, index) => (
              <ArticleCard
                article={article}
                index={index}
                key={article.id}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Novos artigos deste tópico serão adicionados em breve.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default function TopicPage(props: TopicPageProps) {
  return (
    <Suspense fallback={<TopicLoading />}>
      <TopicContent {...props} />
    </Suspense>
  );
}
