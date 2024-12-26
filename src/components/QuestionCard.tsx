import { User } from 'lucide-react';

interface QuestionCardProps {
  title: string;
  content: string;
  username: string;
}

export function QuestionCard({ title, content, username }: QuestionCardProps) {
  return (
    <div 
      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg w-full animate-slide-up"
      style={{
        background: 'white'
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="overflow-hidden rounded-full border-2 border-black">
          <div className="bg-white h-8 w-8 flex items-center justify-center">
            <User size={16} className="text-black" />
          </div>
        </div>
        <span className="text-black text-sm font-medium">@{username}</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-black/70 mb-2 sm:mb-3">{title}</h2>
      <p className="text-black/90 text-base sm:text-lg">{content}</p>
    </div>
  );
}