
import { cacheLife } from "next/cache";
import { getApiResource } from "@/services/api";
import type { Topic } from "@/types/content-api";
import type { ApiPage } from "@/types/api";

export function getTopics(): Promise<Topic[]> {
  return getApiResource("/api/v1/topics") as Promise<Topic[]>;
}

export async function getTopicsByCategory(
  categoryId: number,
  page = 0,
  size = 20,
): Promise<ApiPage<Topic>> {
  "use cache";
  cacheLife("minutes");

  return getApiResource(
    `/api/v1/topics/category/${categoryId}?page=${page}&size=${size}`,
  ) as Promise<ApiPage<Topic>>;
}
