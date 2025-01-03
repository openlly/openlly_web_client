import { Layout } from '../components/Layout';
import { Mail, MapPin } from 'lucide-react';

export function Contact() {
    const supportEmail= import.meta.env.VITE_CONTACT_EMAIL
    const address = import.meta.env.VITE_COMPANY_ADDRESS
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
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
                <p>{address}</p>
              </div>
            </div>

            
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ee0979] to-[#ff6a00] text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}