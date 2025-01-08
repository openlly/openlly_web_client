"use client";

import { EarlyAccessContent } from '../components/EmailVerification/EarlyAccessContent';
import { AppRedirect } from '../components/EmailVerification/AppRedirects';
import { useSearchParams } from 'next/navigation';
import { isMobileDevice } from '../utils/plateform';

export default function EmailVerificationPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  const email = searchParams.get('email') || '';

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
