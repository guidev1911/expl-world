import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock3 } from "lucide-react";
import { articles, getArticleBySlug, getCategoryBySlug, getTopicBySlug } from "@/data/mock-content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return article
    ? { title: article.title, description: article.description }
    : { title: "Artigo não encontrado" };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const category = getCategoryBySlug(article.categorySlug);
  const topic = getTopicBySlug(article.topicSlug);

  if (!category || !topic) notFound();

  return (
    <main className="page-section page-shell">
      <nav className="breadcrumb" aria-label="Caminho da página">
        <Link href="/">Início</Link><ChevronRight size={13} aria-hidden="true" />
        <Link href={`/categories/${category.slug}`}>{category.name}</Link><ChevronRight size={13} aria-hidden="true" />
        <Link href={`/topics/${topic.slug}`}>{topic.name}</Link><ChevronRight size={13} aria-hidden="true" />
        <span>Artigo</span>
      </nav>

      <header className="editorial-heading" style={{ maxWidth: 850, marginBottom: 35 }}>
        <p className="eyebrow"><span className="eyebrow__mark" /> {category.name} · {topic.name}</p>
        <h1 className="editorial-heading__plain">{article.title}</h1>
        <p className="editorial-heading__description">{article.description}</p>
        <div className="editorial-heading__meta">
          <span><Clock3 size={14} aria-hidden="true" /> {article.readTime}</span>
          <span>Conteúdo demonstrativo</span>
        </div>
      </header>

      <div className="editorial-layout">
        <article className="article-reading">
          <div className="article-reading__cover">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 760px"
            />
          </div>
          <p className="article-reading__intro">{article.description}</p>
          {article.sections.map((section) => (
            <section className="article-section" id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </article>
        <aside className="article-sidebar">
          <h2 className="article-sidebar__title">Nesta leitura</h2>
          <nav className="article-sidebar__links" aria-label="Seções do artigo">
            {article.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>{section.title}</a>
            ))}
          </nav>
        </aside>
      </div>
      <div className="demo-notice" style={{ marginTop: 34 }}>
        <span className="eyebrow__mark" aria-hidden="true" />
        Texto de demonstração para a prévia do produto; conteúdo final será integrado à API.
      </div>
    </main>
  );
}
