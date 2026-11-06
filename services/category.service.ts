import { getApiResource } from "@/services/api";
import type { Category } from "@/types/content-api";

export function getCategories(): Promise<Category[]> {
  return getApiResource("/api/v1/categories") as Promise<Category[]>;
}