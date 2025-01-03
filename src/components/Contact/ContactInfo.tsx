import { Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
    const supportEmail= import.meta.env.VITE_CONTACT_EMAIL
    const address = import.meta.env.VITE_COMPANY_ADDRESS
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <Mail className="w-5 h-5 mt-1 text-[#ee0979]" />
        <div>
          <h3 className="font-semibold mb-1">Email</h3>
          <p>{supportEmail}</p>
          <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 mt-1 text-[#ee0979]" />
        <div>
          <h3 className="font-semibold mb-1">Address</h3>
          <p>${address}</p>
        </div>
      </div>
    </div>
  );
}