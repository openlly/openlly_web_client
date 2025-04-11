import { getQuestionDetails } from './lib/getQuestionDetail';
import { AnswerComponent } from '@/app/components/answerPage/AnswerPageLayout';
import { ErrorState } from '@/app/components/answerPage/QuestionNotFound';
import { Suspense } from 'react';
import { submitAnswer } from './lib/submitAnswer';
import { onRequestQuestionSuggestion } from './lib/questionSuggestion';
import { appConfig } from '@/app/utils/constants';
import { globalMetaData } from '@/app/utils/globalMetaDeta';
import { Layout } from '@/app/components/Layout';

interface PageProps {
  params: {
    username: string;
    question: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { username, question } = params;
  const questionData = await getQuestionDetails(username, question);

  if (!questionData) {
    return globalMetaData;
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

const LoadingState = () => (
  <div className="flex justify-center items-center min-h-screen bg-[#0c0c0c] text-white">
    <div
      role="status"
      className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"
    />
    <span className="sr-only">Loading...</span>
  </div>
);

export default async function AnswerPage({ params }: PageProps) {
  const { username, question } = params;
  const questionData = await getQuestionDetails(username, question);

  return (
    <Layout>
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
    </Layout>
  );
}
