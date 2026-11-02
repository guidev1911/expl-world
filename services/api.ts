import { ApiError } from "@/types/api";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/+$/, "");

export async function getApiResource(path: string): Promise<unknown> {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL não está configurada.");
  }

  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new ApiError(
      `A API respondeu com o status ${response.status}.`,
      response.status,
    );
  }

  const body: unknown = await response.json();
  return body;
}
