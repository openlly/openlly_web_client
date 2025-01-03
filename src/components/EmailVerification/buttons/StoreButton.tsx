import { ArrowRight } from 'lucide-react';

interface StoreButtonProps {
  storeUrl: string;
}

export function StoreButton({ storeUrl }: StoreButtonProps) {
  return (
    <a
      href={storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white text-[#ee0979] px-6 py-3 rounded-full 
        font-semibold hover:bg-opacity-90 transition-all"
    >
      Download App <ArrowRight size={18} />
    </a>
  );
}