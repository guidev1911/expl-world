import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ArticleCard } from "@/components/common/article-card";
import { getArticlesByTopic, getCategoryBySlug, getTopicBySlug, topics } from "@/data/mock-content";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topics.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  return topic
    ? { title: topic.name, description: topic.description }
    : { title: "Tópico não encontrado" };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) notFound();

  const category = getCategoryBySlug(topic.categorySlug);
  const topicArticles = getArticlesByTopic(topic.slug);

  if (!category) notFound();

  return (
    <main className="page-section page-shell">
      <nav className="breadcrumb" aria-label="Caminho da página">
        <Link href="/">Início</Link><ChevronRight size={13} aria-hidden="true" />
        <Link href={`/categories/${category.slug}`}>{category.name}</Link>
        <ChevronRight size={13} aria-hidden="true" /><span>{topic.name}</span>
      </nav>
      <section className="editorial-hero">
        <Image
          className="editorial-hero__image"
          src={topic.image}
          alt={topic.name}
          fill
          sizes="(max-width: 700px) 100vw, 1200px"
          priority
        />
        <div className="editorial-hero__content editorial-heading">
          <p className="eyebrow"><span className="eyebrow__mark" /> {category.name}</p>
          <h1><span className="editorial-heading__plain">{topic.name}</span></h1>
          <p className="editorial-heading__description">{topic.description}</p>
        </div>
      </section>

      <div className="demo-notice">
        <span className="eyebrow__mark" aria-hidden="true" />
        Conteúdo demonstrativo: estes artigos são exemplos editoriais, não dados da API.
      </div>

      <section aria-labelledby="topic-articles-heading">
        <div className="subsection-heading">
          <h2 id="topic-articles-heading">Artigos sobre {topic.name.toLocaleLowerCase("pt-BR")}</h2>
          <p>Categoria: <Link className="text-link" href={`/categories/${category.slug}`}>{category.name}</Link></p>
        </div>
        {topicArticles.length > 0 ? (
          <div className="article-grid">
            {topicArticles.map((article, index) => (
              <ArticleCard article={article} index={index} key={article.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-state"><p>Novos artigos deste tópico serão adicionados em breve.</p></div>
        )}
      </section>
    </main>
  );
}
