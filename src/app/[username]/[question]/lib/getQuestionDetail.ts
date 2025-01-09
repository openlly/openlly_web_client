"use server";
import { APIResponse, QuestionData } from "@/app/types";
import { appConfig } from "@/app/utils/constants";

export async function getQuestionDetails(u: string, q: string): Promise<QuestionData | null> {
   try{
    const response = await fetch(
      `${appConfig.CLIENT_BASE_URL}/api/question?u=${u}&q=${q}`
    );
    const data = (await response.json()) as APIResponse;
    return data.success ? data.data as QuestionData : null;
   }catch{
    return null;
   }
}
