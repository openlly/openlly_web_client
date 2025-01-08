import  { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div 
      className={`fixed top-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg 
        text-white animate-slide-up ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
    >
      {type === 'success' ? (
        <CheckCircle size={20} className="shrink-0" />
      ) : (
        <XCircle size={20} className="shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}