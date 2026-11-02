import { getApiResource } from "@/services/api";

export function getCategories(): Promise<unknown> {
  return getApiResource("/api/v1/categories");
}
