"use client";
import { ChevronRight, Star, ArrowLeft } from 'lucide-react';
import { links } from '../../utils/constants';
import { useRouter } from 'next/navigation';


export function EarlyAccessContent() {
  const navigate = useRouter();

  const handleEarlyAccess = () => {
    window.open(links.earlyAccess, '_blank');
  };

  const handleGoBack = () => {
    navigate.push('/');
  };

  return (
    <div className="text-center space-y-6">
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block">
        <Star className="w-12 h-12 text-white" />
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Join Our Early Access</h2>
        <p className="text-white/80 max-w-md mx-auto">
          Be among the first to experience anonymous messaging reimagined. Sign up for early access and get exclusive features.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleGoBack}
          className="inline-flex items-center gap-2 bg-white text-[#ee0979] px-6 py-3 rounded-full 
            font-semibold hover:bg-opacity-90 transition-all"
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        <button
          onClick={handleEarlyAccess}
          className="inline-flex items-center gap-2 bg-white text-[#ee0979] px-6 py-3 rounded-full 
            font-semibold hover:bg-opacity-90 transition-all"
        >
          Get Early Access <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}