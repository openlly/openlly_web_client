import { APIResponse } from "@/app/types";
import { appConfig } from "@/app/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let response: APIResponse;
  
  try {
    // Check if body is JSON and parse it
    const body = await request.json();
    //remove empty fields from body
    Object.keys(body).forEach(key => {
      if (body[key] === null || body[key] === undefined || body[key] === "") {
        delete body[key];
      }
    });
   

    // Make POST request to "/api/answer/create"
    const apiResult = await fetch(`${appConfig.API_BASE_URL}/answer/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await apiResult.json();
    response = data as APIResponse;
  } catch (e) {
    console.error("Error submitting answer:", e);
    response = {
      success: false,
      message: "Failed to submit answer",
      errorCode : "submit_answer_error",
      data : null,
      tokenExpired : false,
      status : 500
    };
  }

  // Return the response
  return NextResponse.json(response);
}
