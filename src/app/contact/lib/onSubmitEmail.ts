'use server';
import { APIResponse, ContactFormProps } from "@/app/types";
import { appConfig } from "@/app/utils/constants";

export async function onSubmitContactDetails(data: ContactFormProps): Promise<boolean> {
  'use server';
    try {
      const response = await fetch(`${appConfig.CLIENT_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }
      let responseData: APIResponse;
      try {
        responseData = await response.json();
        return responseData.success;
      } catch (parseError) {
        throw new Error("Error parsing JSON: " + parseError);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return false;
    }
  }