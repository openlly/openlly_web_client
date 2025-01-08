import { NextResponse } from "next/server";
import { APIResponse } from "@/app/types";
import { appConfig } from "@/app/utils/constants";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({
        status: 400,
        success: false,
        message: 'Invalid request',
        data: null,
        errorCode: "INVALID_REQUEST",
        tokenExpired: false
      }, { status: 400 });
    }

    const apiResult = await fetch(`${appConfig.API_BASE_URL}/question/suggestion/${id}`);
    const data: APIResponse = await apiResult.json();

    return NextResponse.json(data, { status: data.status });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      status: 500,
      success: false,
      message: 'Internal Server Error',
      data: null,
      errorCode: "INTERNAL_SERVER_ERROR",
      tokenExpired: false
    }, { status: 500 });
  }
}
