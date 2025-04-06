import { HelpCircle, Lightbulb } from 'lucide-react';
import { Tooltip } from '../Tooltip';

interface HintFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function HintField({ value, onChange }: HintFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Tooltip content="Help user guess who you are!">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
            <Lightbulb size={14} className="text-[#ee0979]" />
            <span>Add a hint</span>
          </div>
        </Tooltip>
      </div>

      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          <Tooltip content="Examples: 'We met at the coffee shop' or 'I sit next to you'">
            <HelpCircle size={16} />
          </Tooltip>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Add a hint to help them guess who you are (optional)"
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800
            text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500
            focus:ring-2 focus:ring-[#ee0979]/20 border border-gray-300 dark:border-gray-700
            transition-all"
        />
      </div>
    </div>
  );
}
