import { getApiResource } from "@/services/api";

export function getArticles(): Promise<unknown> {
  return getApiResource("/api/v1/articles");
}
