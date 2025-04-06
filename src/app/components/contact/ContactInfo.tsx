"use client";
import { appConfig } from '@/app/utils/constants';
import { Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  const supportEmail = appConfig.CONTACT_EMAIL_ADDRESS;
  const address = appConfig.CONTACT_ADDRESS;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <Mail className="w-5 h-5 mt-1 text-[#ee0979]" />
        <div>
          <h3 className="font-semibold mb-1 text-white">Email</h3>
          <p className="text-gray-300">{supportEmail}</p>
          <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 mt-1 text-[#ee0979]" />
        <div>
          <h3 className="font-semibold mb-1 text-white">Address</h3>
          <p className="text-gray-300">{address}</p>
        </div>
      </div>
    </div>
  );
}
