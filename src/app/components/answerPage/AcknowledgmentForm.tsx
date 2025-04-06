import { Mail, Info } from 'lucide-react';
import { Tooltip } from '../Tooltip';

interface AcknowledgmentFieldProps {
  email: string;
  setEmail: (email: string) => void;
  wantAcknowledgment: boolean;
  setWantAcknowledgment: (want: boolean) => void;
}

export function AcknowledgmentField({
  email,
  setEmail,
  wantAcknowledgment,
  setWantAcknowledgment,
}: AcknowledgmentFieldProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 cursor-pointer group">
        <input
          type="checkbox"
          checked={wantAcknowledgment}
          onChange={(e) => setWantAcknowledgment(e.target.checked)}
          className="rounded border-gray-300 dark:border-gray-600 text-[#ee0979] 
            focus:ring-[#ee0979] focus:ring-offset-0"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
          Notify me when the message is seen
          <Tooltip content="You'll receive an email when they read your message">
            <Info size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
          </Tooltip>
        </span>
      </label>

      {wantAcknowledgment && (
        <div className="relative animate-fade-in">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
            <Mail size={16} />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email for notification"
            required
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800
              text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500
              focus:ring-2 focus:ring-[#ee0979]/20 border border-gray-300 dark:border-gray-700
              transition-all"
          />
        </div>
      )}
    </div>
  );
}
