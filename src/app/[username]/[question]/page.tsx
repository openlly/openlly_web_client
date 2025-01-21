
/* eslint-disable */
import { getQuestionDetails } from './lib/getQuestionDetail';
import { GradientBackground } from '@/app/components/answerPage/GradientBackground';
import { AnswerComponent } from '@/app/components/answerPage/AnswerPageLayout';
import { ErrorState } from '@/app/components/answerPage/QuestionNotFound';
import { Suspense } from 'react';
import { submitAnswer } from './lib/submitAnswer';
import { onRequestQuestionSuggestion } from './lib/questionSuggestion';
import { appConfig } from '@/app/utils/constants';

interface PageProps {
  params: Promise<{
    username: string;
    question: string;
  }>;
}
export async function generateMetadata({ params }: PageProps) {
  const { username, question } = await params;
  const questionData = await getQuestionDetails(username, question);

  // Fallback in case data is missing
  const defaultTitle = "Openlly - Ask Questions Anonymously";
  const defaultDescription = "Share your questions anonymously and receive answers from your followers.";

  const title = `${questionData?.title??"NA"} - Ask by @${questionData?.user.username??"NA"} | Openlly`;
  const description = questionData?.content?.slice(0, 150) || defaultDescription;

  // Use gradient or user profile image as a visual enhancement
  const gradientImage = `${appConfig.CLIENT_BASE_URL}/api/ogimage?t=q&q=${question}&u=${username}`
  const url = `${appConfig.CLIENT_BASE_URL}/${username}/${question}`;
  return {
    title: title || defaultTitle,
    description: description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: gradientImage,
          width: 800,
          height: 600,
          alt: `${questionData?.title??"NA"} - Openlly Question`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: gradientImage,
          alt: `${questionData?.title??"NA"} - Openlly Question`,
        },
      ],
    },
  };
}


export default async function AnswerPage({ params }: PageProps) {
  const { username, question } = await params;
  const questionData = await getQuestionDetails(username, question); // Assuming this is a function that fetches the data

  return (
    <GradientBackground>
      <Suspense fallback={<LoadingState />}>
        {questionData ? (
          <AnswerComponent
            questionData={questionData}
            handleSubmitAnswer={submitAnswer}
            onRandomSuggestion={onRequestQuestionSuggestion}
          />
        ) : (
          <ErrorState />
        )}
      </Suspense>
    </GradientBackground>
  );
}

const LoadingState = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full border-t-transparent border-solid" />
    </div>
  );
};