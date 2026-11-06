import { getApiResource } from "@/services/api";
import type { Topic } from "@/types/content-api";

export function getTopics(): Promise<Topic[]> {
  return getApiResource("/api/v1/topics") as Promise<Topic[]>;
}