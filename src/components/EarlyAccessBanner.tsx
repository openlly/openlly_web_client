import { ChevronRight } from 'lucide-react';
import { links } from '../utils/constants';

export function EarlyAccessBanner() {
  const handleEarlyAccess = () => {
    window.open(links.earlyAccess, '_blank');
  };

  return (
    <div 
      onClick={handleEarlyAccess}
      className={`bg-white p-4 rounded-lg mb-6 text-black 
        flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 
        cursor-pointer hover:opacity-90 transition-opacity animate-fade-in`}
    >
      <span className="font-medium text-sm sm:text-base">Create your own anonymous Q&A page!</span>
      <div className="flex items-center gap-1 text-sm sm:text-base">
        <span>Get Early Access</span>
        <ChevronRight size={18} />
      </div>
    </div>
  );
}