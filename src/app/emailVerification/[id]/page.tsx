"use client";

import { EarlyAccessContent } from '../../components/EmailVerification/EarlyAccessContent';
import { AppRedirect } from '../../components/EmailVerification/AppRedirects';
import { Suspense } from 'react';
import { isMobileDevice } from '../../utils/plateform';
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EmailVerificationPage({ params }: PageProps) {
  const { id } = await params;
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get('email');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmailVerificationPageContent params={{ token: id, email: email || '' }} />
    </Suspense>
  );
}

interface EmailVerificationPageProps {
  params: {
    token: string;
    email: string;
  };
}

function EmailVerificationPageContent({ params }: EmailVerificationPageProps) {
  const { token, email } = params;

  const isMobile = isMobileDevice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ee0979] to-[#ff6a00] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isMobile && token && email ? (
          <AppRedirect token={token} email={email} />
        ) : (
          <div>
            <EarlyAccessContent />
          </div>
        )}
      </div>
    </div>
  );
}
