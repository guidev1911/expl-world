import { getApiResource } from "@/services/api";
import type { Article } from "@/types/content-api";

export function getArticles(): Promise<Article[]> {
  return getApiResource("/api/v1/articles") as Promise<Article[]>;
}