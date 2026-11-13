import { getApiResource } from "@/services/api";
import type { Article } from "@/types/content-api";
import type { ApiPage } from "@/types/api";

export function getArticles(): Promise<Article[]> {
  return getApiResource("/api/v1/articles") as Promise<Article[]>;
}

export function getArticlesByTopic(
  topicId: number,
  page = 0,
  size = 20,
): Promise<ApiPage<Article>> {
  return getApiResource(
    `/api/v1/articles/topic/${topicId}?page=${page}&size=${size}`,
  ) as Promise<ApiPage<Article>>;
}