

import { useParams } from 'react-router-dom';

import { EarlyAccessContent } from '../components/verification/EarlyAccessContent.tsx';
import { isMobileDevice } from '../utils/plateform';
import { AppRedirect } from '../components/verification/AppRedirects';

export function EmailVerificationPage() {
  const { token } = useParams<{ token: string }>();
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get('email') || '';

  const isMobile = isMobileDevice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ee0979] to-[#ff6a00] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isMobile && token ? (
          <AppRedirect token={token} email={email} />
        ) : (
          <EarlyAccessContent />
        )}
      </div>
    </div>
  );
}