/* eslint-disable */
export interface QuestionData {
    id: string;
    title: string;
    content: string;
    user: {
      id: string;
      username: string;
      createdAt: string | null;
      profileImg: string | null;
    };
    gradient?: string[];
  }
  
  export interface AnswerFormData {
    content: string;
    questionId: string;
    answerTo: string;
    hint?: string;
    notifEmail?: string | null;
    userIdentity?: string | null;
    revealTime?: string | null;
  }

export interface APIResponse {
  status: number;
  success: boolean;
  message: string | null;
  data: any | null;
  errorCode: string | null;
  tokenExpired: boolean | null;
}

export interface QuestionCardProps {
  title: string;
  content: string;
  username: string;
  profileImg?: string;
}

export interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}