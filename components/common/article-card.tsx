import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCategoryBySlug } from "@/data/mock-content";
import type { MockArticle } from "@/types/content";

type ArticleCardProps = {
  article: MockArticle;
  index?: number;
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  const category = getCategoryBySlug(article.categorySlug);

  return (
    <article className="article-card">
      <Link className="article-card__image-wrap" href={`/articles/${article.slug}`} aria-label={`Ler: ${article.title}`}>
        <Image
          className="article-card__image"
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
        />
        {index !== undefined && (
          <span className="article-card__index" aria-hidden="true">0{index + 1}</span>
        )}
      </Link>
      <div className="article-card__body">
        <span className="article-card__category">{category?.name ?? "Descobertas"}</span>
        <Link className="article-card__title" href={`/articles/${article.slug}`}>{article.title}</Link>
        <p className="article-card__description">{article.description}</p>
        <Link className="article-card__read" href={`/articles/${article.slug}`}>
          Ler artigo <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
