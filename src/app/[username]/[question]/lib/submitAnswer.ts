"use server";
import { AnswerFormData } from "@/app/types";
import { appConfig } from "@/app/utils/constants";
export async function submitAnswer(data: AnswerFormData): Promise<boolean> {
  try {
    //get device info
   //  const deviceInfo = await getDeviceInfo();
   // console.log(deviceInfo);  
    const response = await fetch(`${appConfig.CLIENT_BASE_URL}/api/answer/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return false;
    }
    const { success } = await response.json();
    return success;
  } catch (e) {
    console.error(e);
    return false;
  }
}