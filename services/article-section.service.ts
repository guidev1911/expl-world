import { getApiResource } from "@/services/api";
import type { ArticleSection } from "@/types/content-api";
import type { ApiPage } from "@/types/api";

export function getArticleSections(
  articleId: number,
  page = 0,
  size = 20,
): Promise<ApiPage<ArticleSection>> {
  return getApiResource(
    `/api/v1/article-sections/article/${articleId}?page=${page}&size=${size}`,
  ) as Promise<ApiPage<ArticleSection>>;
}