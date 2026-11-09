import { getApiResource } from "@/services/api";
import type { Category } from "@/types/content-api";
import type { ApiPage } from "@/types/api";

export function getCategories(
  page = 0,
  size = 20,
): Promise<ApiPage<Category>> {
  return getApiResource(
    `/api/v1/categories?page=${page}&size=${size}`,
  ) as Promise<ApiPage<Category>>;
}