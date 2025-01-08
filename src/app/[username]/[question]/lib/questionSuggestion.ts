"use server";
import { APIResponse } from "@/app/types";
import { appConfig } from "@/app/utils/constants";
export async function onRequestQuestionSuggestion(id: string): Promise<string | null> {
    try{
   const response = await fetch(
        `${appConfig.CLIENT_BASE_URL}/api/question/suggestion?id=${id}`
      );
    let data: APIResponse;
    try {
      data = await response.json();
      if(data.success === false || data.success === undefined) {
        return null;
      }
    } catch (parseError) {
      console.log('Error parsing JSON:', parseError);
      return null;
    }
    return data.data || null;
  } catch (e) {
    console.log('Error fetching question:', e);
    return null;
  }
}
