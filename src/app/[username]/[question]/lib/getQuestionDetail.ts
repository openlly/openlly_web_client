"use server";
import { APIResponse, QuestionData } from "@/app/types";
import { appConfig } from "@/app/utils/constants";

export async function getQuestionDetails(u: string, q: string): Promise<QuestionData | null> {
  try {
    const response = await fetch(
      `${appConfig.CLIENT_BASE_URL}/api/question?u=${u}&q=${q}`
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
    const question = data as APIResponse;

    return question.data;
  } catch (error) {
    console.log('Error fetching question:', error);
    return null;
  }
}
