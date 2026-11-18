
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCategoryBySlug } from "@/data/mock-content";
import type { MockArticle } from "@/types/content";
import type { Article } from "@/types/content-api";

type ArticleCardProps = {
  article: MockArticle | Article;
  index?: number;
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  const isApiArticle = "imageUrl" in article;

  const category = isApiArticle
    ? null
    : getCategoryBySlug(article.categorySlug);

  const image = isApiArticle ? article.imageUrl : article.image;
  const imageAlt = isApiArticle ? article.title : article.imageAlt;
  const description = isApiArticle
    ? article.shortDescription
    : article.description;

  const categoryName = isApiArticle
    ? article.topicName
    : category?.name ?? "Descobertas";

  const articleHref = isApiArticle
    ? `/articles/${article.slug}?topicId=${article.topicId}`
    : `/articles/${article.slug}`;

  return (
    <article className="article-card">
      <Link
        className="article-card__image-wrap"
        href={articleHref}
        aria-label={`Ler: ${article.title}`}
      >
        {image && (
          <Image
            className="article-card__image"
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
          />
        )}

        {index !== undefined && (
          <span className="article-card__index" aria-hidden="true">
            0{index + 1}
          </span>
        )}
      </Link>

      <div className="article-card__body">
        <span className="article-card__category">{categoryName}</span>

        <Link className="article-card__title" href={articleHref}>
          {article.title}
        </Link>

        <p className="article-card__description">{description}</p>

        <Link className="article-card__read" href={articleHref}>
          Ler artigo <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
