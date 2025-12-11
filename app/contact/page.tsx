'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { trackEvent, trackLeadWithUserData } from '@/components/MetaPixel';
import { trackFormSubmission, trackEvent as trackGA4Event } from '@/components/GoogleAnalytics';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');
  const [formStarted, setFormStarted] = useState(false);

  useEffect(() => {
    // Track ViewContent for contact page
    trackEvent('ViewContent', {
      content_name: 'Contact Page',
      content_type: 'page',
      content_category: 'Contact'
    });
  }, []);

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '');

    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const validatePhone = (phone: string) => {
    const phoneDigits = phone.replace(/\D/g, '');
    if (phone && phoneDigits.length !== 10) {
      setPhoneError('Please enter a valid 10-digit US phone number');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Track InitiateCheckout when user starts filling form (only once)
    if (!formStarted && value.length > 0) {
      setFormStarted(true);
      trackEvent('InitiateCheckout', {
        content_name: 'Contact Form Started',
        content_category: 'Contact'
      });
      trackGA4Event('form_start', {
        form_name: 'Contact Form',
        form_destination: 'contact'
      });
    }

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData({
        ...formData,
        phone: formatted
      });
      if (value) validatePhone(formatted);
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone before submission if phone is provided
    if (formData.phone && !validatePhone(formData.phone)) {
      return;
    }

    setStatus('loading');

    try {
      // Send email using API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Track Meta Pixel Lead event with advanced matching
      const [firstName, ...lastNameParts] = formData.name.trim().split(' ');
      const lastName = lastNameParts.join(' ');

      trackLeadWithUserData('Contact Form Submission', 1.0, {
        email: formData.email,
        phone: formData.phone || undefined,
        firstName: firstName,
        lastName: lastName || undefined
      });

      // Track GA4 Lead event
      trackFormSubmission('Contact Form', 1.0);

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#000000] pt-[140px] pb-[80px] px-5">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-white mb-6 font-bold leading-[1.1]">
            Let's Grow Your Business
          </h1>
          <p className="text-gray-300 text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] font-body font-normal leading-relaxed max-w-[600px] mx-auto">
            Ready to see how Meta advertising can transform your business? Fill out the form below and we'll be in touch within 24 hours.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-8 sm:p-10 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[rgba(95,169,159,0.6)] hover:shadow-[0_0_40px_rgba(95,169,159,0.2)] transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-white text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] font-heading mb-2 font-bold">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-5 py-4 bg-[rgba(26,26,26,0.6)] border-2 border-[rgba(95,169,159,0.3)] rounded-xl text-white font-body text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] outline-none transition-all duration-300 focus:border-[#5FA99F] focus:shadow-[0_0_20px_rgba(95,169,159,0.3)] focus:ring-2 focus:ring-[#5FA99F] focus:ring-opacity-30 placeholder:text-gray-500"
                placeholder="John Smith"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] font-heading mb-2 font-bold">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-5 py-4 bg-[rgba(26,26,26,0.6)] border-2 border-[rgba(95,169,159,0.3)] rounded-xl text-white font-body text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] outline-none transition-all duration-300 focus:border-[#5FA99F] focus:shadow-[0_0_20px_rgba(95,169,159,0.3)] focus:ring-2 focus:ring-[#5FA99F] focus:ring-opacity-30 placeholder:text-gray-500"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-white text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] font-heading mb-2 font-bold">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={phoneError ? 'true' : 'false'}
                aria-describedby={phoneError ? 'phone-error' : undefined}
                className={`w-full px-5 py-4 bg-[rgba(26,26,26,0.6)] border-2 ${phoneError ? 'border-red-500' : 'border-[rgba(95,169,159,0.3)]'} rounded-xl text-white font-body text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] outline-none transition-all duration-300 focus:border-[#5FA99F] focus:shadow-[0_0_20px_rgba(95,169,159,0.3)] focus:ring-2 focus:ring-[#5FA99F] focus:ring-opacity-30 placeholder:text-gray-500`}
                placeholder="(555) 123-4567"
                maxLength={14}
              />
              {phoneError && (
                <p id="phone-error" className="mt-1 text-red-400 text-[0.85rem] font-body" role="alert">{phoneError}</p>
              )}
            </div>

            {/* Business Name Field */}
            <div>
              <label htmlFor="businessName" className="block text-white text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] font-heading mb-2 font-bold">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-5 py-4 bg-[rgba(26,26,26,0.6)] border-2 border-[rgba(95,169,159,0.3)] rounded-xl text-white font-body text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] outline-none transition-all duration-300 focus:border-[#5FA99F] focus:shadow-[0_0_20px_rgba(95,169,159,0.3)] focus:ring-2 focus:ring-[#5FA99F] focus:ring-opacity-30 placeholder:text-gray-500"
                placeholder="Your Business LLC"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-white text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] font-heading mb-2 font-bold">
                Tell Us About Your Goals *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                rows={6}
                className="w-full px-5 py-4 bg-[rgba(26,26,26,0.6)] border-2 border-[rgba(95,169,159,0.3)] rounded-xl text-white font-body text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] outline-none transition-all duration-300 resize-none focus:border-[#5FA99F] focus:shadow-[0_0_20px_rgba(95,169,159,0.3)] focus:ring-2 focus:ring-[#5FA99F] focus:ring-opacity-30 placeholder:text-gray-500"
                placeholder="Tell us about your business, your goals, and what you're hoping to achieve with Meta advertising..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-10 py-5 rounded-xl text-[1rem] sm:text-[1.05rem] md:text-[1.125rem] lg:text-[1.25rem] font-bold font-heading transition-all duration-300 shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline focus:outline-2 focus:outline-[#5FA99F] focus:outline-offset-4"
              >
                {status === 'loading' ? 'Sending...' : 'Get Your Free Strategy Call'}
              </button>
            </div>

            {/* Success Message */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[rgba(95,169,159,0.2)] border-2 border-[#5FA99F] rounded-xl p-4 text-center backdrop-blur-sm"
                role="alert"
                aria-live="polite"
              >
                <p className="text-white font-body text-[1rem] sm:text-[1.05rem] md:text-[1.1rem]">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[rgba(239,68,68,0.2)] border-2 border-red-400 rounded-xl p-4 text-center backdrop-blur-sm"
                role="alert"
                aria-live="assertive"
              >
                <p className="text-white font-body text-[1rem] sm:text-[1.05rem] md:text-[1.1rem]">
                  Oops! Something went wrong. Please email us directly at hello@driveleadmedia.com
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-[60px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 font-body text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] mb-4">
            Or reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="tel:678-650-6411"
              className="text-[#5FA99F] font-heading text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.25rem] font-bold hover:text-[#85C7B3] transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (678) 650-6411
            </a>
            <a
              href="mailto:hello@driveleadmedia.com"
              className="text-[#5FA99F] font-heading text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.25rem] font-bold hover:text-[#85C7B3] transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hello@driveleadmedia.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
