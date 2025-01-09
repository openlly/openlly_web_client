import BrandedCTASection from '@/app/components/answerPage/ogImage/AnswerPageOgImage'
import { appConfig } from '@/app/utils/constants';
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server';

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    // Extract query params
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('t');

    // If no type query, fetch question data
    if (type) {
      const username = searchParams.get('u');
      const question = searchParams.get('q');

      // Ensure both username and question are provided
      if (username && question) {
        const response = await fetch(
          `${appConfig.CLIENT_BASE_URL}/api/question?u=${username}&q=${question}`
        );
        if (response.ok) {
          const json = await response.json();
          const questionData = json.data

          // Render the image response with question data, safely passing to the component
          return new ImageResponse(
            (
              <BrandedCTASection questionData={questionData || undefined} /> // Handle undefined gracefully
            ),
            {
              width: 1920,
              height: 1080,
            }
          );
        }
      }
    }

    // Default fallback if username or question are missing, or some other issue
    return new ImageResponse(
      <h1>Not Found</h1>,
      { width: 1920, height: 1080 }
    );

  } catch (e) {
    console.error(`${e}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
