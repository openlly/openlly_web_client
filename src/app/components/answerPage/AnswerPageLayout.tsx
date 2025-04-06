"use client";

import { Suspense, useCallback } from "react";
import { AnswerForm } from "./AnswerForm";
import { EarlyAccessBanner } from "./EarlyAccessBanner";
import { QuestionCard } from "./QuestionCard";
import { AnswerFormData, QuestionData } from "@/app/types";
import { useToast } from "@/app/hooks/useToast";
import { Toast } from "../Toast";
import { AppLogo } from "../AppLogo/AppLogo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


interface AnswerComponentProps {
  questionData: QuestionData;
  onRandomSuggestion: (questionId: string) => Promise<string | null>;
  handleSubmitAnswer: (data: AnswerFormData) => Promise<boolean>;
}

export function AnswerComponent({
  questionData,
  handleSubmitAnswer,
  onRandomSuggestion,
}: AnswerComponentProps) {
  const { toast, showToast, hideToast } = useToast();

  const validateFormData = (data: {
    answer: string;
    hint?: string;
    revealName: boolean;
    name?: string;
    revealTime?: string;
    email?: string;
    wantAcknowledgment?: boolean;
  }) => {
    const errors: string[] = [];

    if (!data.answer?.trim()) errors.push("Content is required.");
    if (data.wantAcknowledgment && (!data.email || !/\S+@\S+\.\S+/.test(data.email))) {
      errors.push("A valid email is required for acknowledgment.");
    }
    if (data.revealName && !data.name?.trim()) {
      errors.push("Name is required if you want to reveal your identity.");
    }
    if (data.revealName && !data.revealTime?.trim()) {
      errors.push("Reveal time is required if you want to reveal your identity.");
    }

    return errors;
  };

  const handleSubmit = useCallback(
    async (data: {
      answer: string;
      hint: string;
      revealName: boolean;
      name?: string;
      revealTime?: string;
      email?: string;
      wantAcknowledgment?: boolean;
    }) => {
      const validationErrors = validateFormData(data);
      if (validationErrors.length > 0) {
        showToast(validationErrors.join(" "), "error");
        return;
      }

      const formData = {
        answer: data.answer,
        revealName: data.revealName,
        hint: data.hint,
        questionId: questionData.id,
        answerTo: questionData.user.id,
        name: data.name,
        revealTime: data.revealTime,
        email: data.email,
      };

      const success = await handleSubmitAnswer({
        content: formData.answer,
        hint: formData.hint,
        notifEmail: formData.email,
        userIdentity: formData.name,
        revealTime: formData.revealTime,
        questionId: formData.questionId,
        answerTo: formData.answerTo,
      });

      if (success) {
        showToast("Your message has been submitted successfully.", "success");
      } else {
        showToast("Failed to submit your message. Please try again.", "error");
      }
    },
    [questionData, handleSubmitAnswer, showToast]
  );

  if (!questionData || !questionData.user) {
    return (
      <div className="text-center text-white">
        <p>Invalid question data. Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:py-10 max-w-screen-md mx-auto text-white">
    {/* 🧭 Header Navbar */}
       <header className="sticky top-0 z-30 bg-black/70 backdrop-blur-md px-4 py-3 mb-6 rounded-lg flex items-center justify-between border border-white/10 shadow-md">
        <Link href="/" className="flex items-center gap-2 text-white hover:underline">
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </Link>
        
      </header>

      <div className="space-y-6 sm:space-y-8">
        <QuestionCard
          title={questionData.title}
          content={questionData.content}
          username={questionData.user.username}
          profileImg={questionData.user.profileImg ?? ""}
        />

        <Suspense fallback={<div>Loading form...</div>}>
          <AnswerForm
            onSubmit={handleSubmit}
            questionId={questionData.id}
            onRandomSuggestion={onRandomSuggestion}
          />
        </Suspense>
      </div>

      {toast.isVisible && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}

<footer className="mt-10 space-y-4 flex flex-col items-center justify-center">
  <EarlyAccessBanner />
  <AppLogo size="small" />
</footer>
    </div>
  );
}
