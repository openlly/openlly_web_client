import { Mail, Info } from 'lucide-react';
import { Tooltip } from './Tooltip';

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
          className="rounded border-gray-300 text-[#ee0979] 
            focus:ring-[#ee0979] focus:ring-offset-0"
        />
        <span className="text-sm text-gray-600 flex items-center gap-1">
          Notify me when the message is seen
          <Tooltip content="You'll receive an email when they read your message">
            <Info size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
          </Tooltip>
        </span>
      </label>

      {wantAcknowledgment && (
        <div className="relative animate-fade-in">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail size={16} />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email for notification"
            required
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-50/50
              text-sm placeholder:text-gray-400
              focus:ring-2 focus:ring-[#ee0979]/20 border-0
              transition-all"
          />
        </div>
      )}
    </div>
  );
}