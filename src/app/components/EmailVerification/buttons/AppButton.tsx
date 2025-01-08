import { ArrowRight } from 'lucide-react';

interface AppButtonProps {
  onClick: () => void;
  label: string;
}

export function AppButton({ onClick, label }: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 bg-white text-[#ee0979] px-6 py-3 rounded-full 
        font-semibold hover:bg-opacity-90 transition-all"
    >
      {label} <ArrowRight size={18} />
    </button>
  );
}