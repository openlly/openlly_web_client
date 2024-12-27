import { QuestionCard } from '../components/QuestionCard';
import { AnswerForm } from '../components/AnswerForm';
import { EarlyAccessBanner } from '../components/EarlyAccessBanner';
import { Footer } from '../components/Footer';
import { GRADIENTS } from '../utils/constants';
import { useToast } from '../hooks/useToast';
import { Toast } from '../components/Toast';
import { useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


// Question Data Type
interface QuestionData {
  id: string;
  title: string;
  content: string;
  user: {
    id: string;
    username: string;
    createdAt: string;
    profileImg: string;
  };
  gradient?: string[];
}

// AnswerPage Component
import { useRef } from 'react';

export function AnswerPage() {
  const { u, q } = useParams<{ u: string; q: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [questionData, setQuestionData] = useState<QuestionData | null>(null);

  const { toast, showToast, hideToast } = useToast();
  const hasFetched = useRef(false); // Track if API has been called

  useEffect(() => {
    if (hasFetched.current) return; // Prevent duplicate calls
    hasFetched.current = true;

    const fetchQuestionData = async () => {
      try {
        console.log('Fetching question data...');
        setLoading(true);

        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const url = `${baseUrl}/question/getQuestionDetails?q=${q}&u=${u}`;
        console.log('API URL:', url);

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load question data');

        const data = await response.json();
        console.log('Fetched data:', data);

        setQuestionData(data.data);
      } catch (error: any) {
        console.error('Error:', error.message);
        setError(error.message);
        showToast(`Failed to load question data. ${error.message}`, 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionData();
  }, [u, q]); // Only triggers on param changes

  const handleSubmitAnswer = (answer: string) => {
    try {
     const endpoint="/answer/create";
     const baseUrl = import.meta.env.VITE_API_BASE_URL;
     const url = `${baseUrl}${endpoint}`;
     const data= {
        content: answer,
        questionId: questionData?.id,
        answerTo: questionData?.user.id,
     };
     fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to submit answer');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Answer submitted successfully:', data);
          showToast('Answer submitted successfully', 'success');
        })
        .catch((error) => {
          console.error('Failed to submit answer:', error);
          showToast(`Failed to submit answer. Please try again. ${error}`, 'error');
        });
    } catch (error) {
      showToast(`Failed to submit answer. Please try again. ${error}`, 'error');
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(135deg, ${GRADIENTS.primary.from}, ${GRADIENTS.primary.to})`,
      }}
    >
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState />
      ) : (
        questionData && (
          <AnswerComponent
            questionData={questionData}
            handleSubmitAnswer={handleSubmitAnswer}
          />
        )
      )}

      {toast.isVisible && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
      <Footer />
    </div>
  );
}


// Loading State Component
const LoadingState = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full border-t-transparent border-solid" />
    </div>
  );
};

// Error State Component
const ErrorState = () => {
    const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="animate-bounce text-center p-4 bg-red-500 rounded-lg shadow-lg">
        <p className="text-2xl font-bold">Whoops, something went wrong!</p>
        <p className="text-xl">It does look like link is broken </p>
        <button
          className="mt-4 px-4 py-2 bg-white hover:bg-gray-100 rounded text-black transition duration-300 ease-in-out"
          onClick={() => {
            //navigate to home
            navigate('/');
          }}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

// AnswerComponent (For Question and Answer Form)
interface QuestionCardProp {
  questionData: QuestionData;
  handleSubmitAnswer: (answer: string) => void;
}

function AnswerComponent({ questionData, handleSubmitAnswer }: QuestionCardProp) {
    if (!questionData || !questionData.user) {
      return (
        <div className="text-center text-white">
          <p>Invalid question data. Please try refreshing the page.</p>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <EarlyAccessBanner />
        <div className="max-w-xl mx-auto space-y-6 sm:space-y-8">
          <QuestionCard
            title={questionData.title}
            content={questionData.content}
            username={questionData.user.username}
            profileImg={questionData.user.profileImg}
          />
          <AnswerForm onSubmit={handleSubmitAnswer} questionId={questionData.id} />
        </div>
      </div>
    );
  }
