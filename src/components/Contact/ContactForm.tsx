import React, { useState } from 'react';
import { LoadingSpinner } from '../Common/LoadingSpinner';
import { sendEmail } from '../../utils/email';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-[#ee0979] focus:border-[#ee0979]
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-[#ee0979] to-[#ff6a00] text-white py-2 rounded-lg
          hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <LoadingSpinner />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      {status === 'success' && (
        <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}
    </form>
  );
}