"use server";
import { appConfig } from "@/app/utils/constants";
export async function onRequestQuestionSuggestion(id: string): Promise<string | null> {
  try {
    const response = await fetch(`${appConfig.CLIENT_BASE_URL}/api/question/suggestion?id=${id}`);
    const { success, data } = await response.json();
    return success ? data as string : null;
  } catch {
    return null;
  }
}
