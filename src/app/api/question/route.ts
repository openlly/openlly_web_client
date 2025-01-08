import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "@/app/types";
import { appConfig } from "@/app/utils/constants";
export async function GET(request: NextRequest) {
    try{
        const { searchParams } = new URL(request.url);
        const user = searchParams.get('u');
        const question = searchParams.get('q');
        if (user && question) {
            // Fetch question details based on user and question
            const questionDetails = await getQuestionDetails(user, question);
            return NextResponse.json(questionDetails, { status: questionDetails.status });
        }
        throw new Error('Invalid request');
    }catch(e){
        return NextResponse.json({
            status: 400,
            success: false,
            message: 'Invalid request',
            data: null,
            errorCode:`${e}`,
        } as APIResponse, { status: 400 });
    }
}

async function getQuestionDetails(user: string, question: string) {
    const response = await fetch(`${appConfig.API_BASE_URL}/question/getQuestionDetails?u=${user}&q=${question}`);
    return response.json();
}