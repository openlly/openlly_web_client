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
    answer: string;
    hint?: string;
    revealName: boolean;
    name?: string;
    revealTime?: string;
    email?: string;
    wantAcknowledgment?: boolean;
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