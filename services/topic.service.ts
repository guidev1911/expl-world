import { getApiResource } from "@/services/api";

export function getTopics(): Promise<unknown> {
  return getApiResource("/api/v1/topics");
}
