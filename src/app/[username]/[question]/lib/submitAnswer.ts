"use server";
import { AnswerFormData, APIResponse } from "@/app/types";
import { appConfig } from "@/app/utils/constants";

export async function submitAnswer(data: AnswerFormData): Promise<boolean> {
  try {
    const response = await fetch(
      `${appConfig.CLIENT_BASE_URL}/api/answer/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    let responseData: APIResponse;
    try {
      responseData = await response.json();
      console.log("data", data);

      if (responseData.success === false || responseData.success === undefined) {
        return false;
      }
    } catch (parseError) {
      console.log('Error parsing JSON:', parseError);
      return false;
    }
    return  true
  } catch (e) {
    console.log('Error submitting answer:', e);
    return false;
  }
}