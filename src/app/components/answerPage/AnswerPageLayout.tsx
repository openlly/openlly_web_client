"use client";

import { Suspense, useCallback } from "react";
import { AnswerForm } from "./AnswerForm";
import { EarlyAccessBanner } from "./EarlyAccessBanner";
import { QuestionCard } from "./QuestionCard";
import { AnswerFormData, QuestionData } from "@/app/types";
import { useToast } from "@/app/hooks/useToast";
import { Toast } from "../Toast";

interface AnswerComponentProps {
  questionData: QuestionData;
  onRandomSuggestion: (questionId: string) => Promise<string | null>;
  handleSubmitAnswer: (data: AnswerFormData) => Promise<boolean>;
}

export function AnswerComponent({ questionData, handleSubmitAnswer,onRandomSuggestion }: AnswerComponentProps) {
  const { toast, showToast, hideToast } = useToast();

  // Validation helper function
  const validateFormData = (data: { answer: string; hint?: string; revealName: boolean; name?: string; revealTime?: string; email?: string; wantAcknowledgment?: boolean }) => {
    const errors: string[] = [];

    if (!data.answer?.trim()) {
      errors.push("Content is required.");
    }

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

  // Handle form submission
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
      // Ensure the object has the correct structure, using type assertions
      const formData: {
        answer: string;
        hint?: string;
        revealName: boolean;
        name?: string;
        revealTime?: string;
        email?: string;
        wantAcknowledgment?: boolean;
        questionId: string;
        answerTo: string;
      } = {
        answer: data.answer,
        revealName: data.revealName,
        hint: data.hint,
        questionId: questionData.id,
        answerTo: questionData.user.id,
      };
      if (data.hint) formData.hint = data.hint;
      if (data.wantAcknowledgment && data.email) formData.email = data.email;
      if (data.revealName && data.name && data.revealTime) {
        formData.name = data.name;
        formData.revealTime = data.revealTime;
      }
      // Pass the correctly shaped object to handleSubmitAnswer
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
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <EarlyAccessBanner />
      <div className="max-w-xl mx-auto space-y-6 sm:space-y-8">
        <QuestionCard
          title={questionData.title}
          content={questionData.content}
          username={questionData.user.username}
          profileImg={questionData.user.profileImg??""}
        />
        <Suspense fallback={<div>Loading form...</div>}>
          <AnswerForm onSubmit={handleSubmit} questionId={questionData.id} onRandomSuggestion={onRandomSuggestion} />
        </Suspense>
      </div>
      {toast.isVisible && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
    </div>
  );
}
