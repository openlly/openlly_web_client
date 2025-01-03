import { Clock, User, Info } from 'lucide-react';
import { Tooltip } from '../Tooltip';


interface RevealFieldsProps {
  name: string;
  setName: (name: string) => void;
  revealTime: string;
  setRevealTime: (time: string) => void;
}

export function RevealFields({
  name,
  setName,
  revealTime,
  setRevealTime,
}: RevealFieldsProps) {
  return (
    <div className="space-y-3 animate-fade-in">
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <User size={16} />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-50/50
            text-sm placeholder:text-gray-400
            focus:ring-2 focus:ring-[#ee0979]/20 border-0
            transition-all"
        />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Clock size={16} />
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Tooltip content="Your name will be revealed at this time">
            <Info size={16} className="text-gray-400" />
          </Tooltip>
        </div>
        <input
          type="datetime-local"
          value={revealTime}
          onChange={(e) => setRevealTime(e.target.value)}
          required
          min={new Date().toISOString().slice(0, 16)}
          className="w-full pl-9 pr-10 py-2 rounded-lg bg-gray-50/50
            text-sm placeholder:text-gray-400
            focus:ring-2 focus:ring-[#ee0979]/20 border-0
            transition-all"
        />
      </div>
    </div>
  );
}