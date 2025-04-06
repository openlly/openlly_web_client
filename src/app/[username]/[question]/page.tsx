
/* eslint-disable */
import { getQuestionDetails } from './lib/getQuestionDetail';
import { AnswerComponent } from '@/app/components/answerPage/AnswerPageLayout';
import { ErrorState } from '@/app/components/answerPage/QuestionNotFound';
import { Suspense } from 'react';
import { submitAnswer } from './lib/submitAnswer';
import { onRequestQuestionSuggestion } from './lib/questionSuggestion';
import { appConfig } from '@/app/utils/constants';
import { globalMetaData } from '@/app/utils/globalMetaDeta';

interface PageProps {
  params: Promise<{
    username: string;
    question: string;
  }>;
}
export async function generateMetadata({ params }: PageProps) {
  const { username, question } = await params;
  const questionData = await getQuestionDetails(username, question);

  if (!questionData) {
    return globalMetaData; // Use global metadata when questionData is unavailable
  }

  const title = `${questionData.title ?? "NA"} - Ask by @${questionData.user.username ?? "NA"} | Openlly`;
  const description = questionData.content?.slice(0, 150) || globalMetaData.description;
  const gradientImage = `${appConfig.CLIENT_BASE_URL}/api/ogimage?t=q&q=${question}&u=${username}`;
  const url = `${appConfig.CLIENT_BASE_URL}/${username}/${question}`;

  return {
    title,
    description,
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
          alt: `${questionData.title ?? "NA"} - Openlly Question`,
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
          alt: `${questionData.title ?? "NA"} - Openlly Question`,
        },
      ],
    },
  };
}



export default async function AnswerPage({ params }: PageProps) {
  const { username, question } = await params;
  const questionData = await getQuestionDetails(username, question); // Assuming this is a function that fetches the data

  return (
  
  <div className="bg-[#0c0c0c] text-white min-h-screen">
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
  </div>
  );
}

const LoadingState = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full border-t-transparent border-solid" />
    </div>
  );
};