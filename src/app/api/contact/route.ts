import { appConfig } from "@/app/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const apiResult = await fetch(`${appConfig.API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return NextResponse.json(await apiResult.json(), { status: apiResult.status });
}
