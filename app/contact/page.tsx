'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          business_name: formData.businessName,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Public Key
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen pt-[100px] pb-[60px] px-5">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.5rem] text-[#EEF4D9] mb-5 font-normal leading-[1.2] [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] tracking-[0.5px] break-words">
            Let's Grow Your Business
          </h1>
          <p className="text-[#85C7B3] text-[0.95rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.25rem] xl:text-[1.3rem] font-serif font-normal leading-[1.5] max-w-[600px] mx-auto">
            Ready to see how Meta advertising can transform your business? Fill out the form below and we'll be in touch within 24 hours.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-[rgba(238,244,217,0.1)] backdrop-blur-[15px] border-2 border-[#85C7B3] rounded-[25px] p-[30px_20px] sm:p-[40px_30px] md:p-[50px_40px] shadow-[0_20px_60px_rgba(1,46,64,0.4)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-[#EEF4D9] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.1rem] font-serif mb-2 font-semibold">
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
                className="w-full px-5 py-4 bg-[rgba(1,46,64,0.5)] border-2 border-[#85C7B3] rounded-xl text-[#EEF4D9] font-serif text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] outline-none transition-all duration-300 focus:border-[#F2A922] focus:shadow-[0_0_12px_rgba(242,169,34,0.2)] md:focus:shadow-[0_0_20px_rgba(242,169,34,0.3)] focus:ring-2 focus:ring-[#F2A922] focus:ring-opacity-50 placeholder:text-[#85C7B3] placeholder:opacity-60"
                placeholder="John Smith"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[#EEF4D9] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.1rem] font-serif mb-2 font-semibold">
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
                className="w-full px-5 py-4 bg-[rgba(1,46,64,0.5)] border-2 border-[#85C7B3] rounded-xl text-[#EEF4D9] font-serif text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] outline-none transition-all duration-300 focus:border-[#F2A922] focus:shadow-[0_0_12px_rgba(242,169,34,0.2)] md:focus:shadow-[0_0_20px_rgba(242,169,34,0.3)] focus:ring-2 focus:ring-[#F2A922] focus:ring-opacity-50 placeholder:text-[#85C7B3] placeholder:opacity-60"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-[#EEF4D9] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.1rem] font-serif mb-2 font-semibold">
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
                className={`w-full px-5 py-4 bg-[rgba(1,46,64,0.5)] border-2 ${phoneError ? 'border-red-500' : 'border-[#85C7B3]'} rounded-xl text-[#EEF4D9] font-serif text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] outline-none transition-all duration-300 focus:border-[#F2A922] focus:shadow-[0_0_12px_rgba(242,169,34,0.2)] md:focus:shadow-[0_0_20px_rgba(242,169,34,0.3)] focus:ring-2 focus:ring-[#F2A922] focus:ring-opacity-50 placeholder:text-[#85C7B3] placeholder:opacity-60`}
                placeholder="(555) 123-4567"
                maxLength={14}
              />
              {phoneError && (
                <p id="phone-error" className="mt-1 text-red-400 text-[0.8rem] font-serif" role="alert">{phoneError}</p>
              )}
            </div>

            {/* Business Name Field */}
            <div>
              <label htmlFor="businessName" className="block text-[#EEF4D9] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.1rem] font-serif mb-2 font-semibold">
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
                className="w-full px-5 py-4 bg-[rgba(1,46,64,0.5)] border-2 border-[#85C7B3] rounded-xl text-[#EEF4D9] font-serif text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] outline-none transition-all duration-300 focus:border-[#F2A922] focus:shadow-[0_0_12px_rgba(242,169,34,0.2)] md:focus:shadow-[0_0_20px_rgba(242,169,34,0.3)] focus:ring-2 focus:ring-[#F2A922] focus:ring-opacity-50 placeholder:text-[#85C7B3] placeholder:opacity-60"
                placeholder="Your Business LLC"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-[#EEF4D9] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.1rem] font-serif mb-2 font-semibold">
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
                className="w-full px-5 py-4 bg-[rgba(1,46,64,0.5)] border-2 border-[#85C7B3] rounded-xl text-[#EEF4D9] font-serif text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] outline-none transition-all duration-300 resize-none focus:border-[#F2A922] focus:shadow-[0_0_20px_rgba(242,169,34,0.3)] placeholder:text-[#85C7B3] placeholder:opacity-60"
                placeholder="Tell us about your business, your goals, and what you're hoping to achieve with Meta advertising..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-br from-[#F2A922] to-[#EEF4D9] text-[#012E40] px-10 py-5 rounded-xl text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.15rem] xl:text-[1.2rem] font-bold font-serif border-2 border-transparent transition-all duration-300 shadow-[0_8px_25px_rgba(242,169,34,0.3)] hover:transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(242,169,34,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline focus:outline-[3px] focus:outline-[rgba(242,169,34,0.5)] focus:outline-offset-2 md:text-[1.1rem] md:py-4"
              >
                {status === 'loading' ? 'Sending...' : 'Get Your Free Strategy Call'}
              </button>
            </div>

            {/* Success Message */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[rgba(133,199,179,0.2)] border-2 border-[#85C7B3] rounded-xl p-4 text-center"
                role="alert"
                aria-live="polite"
              >
                <p className="text-[#EEF4D9] font-serif text-[1.1rem]">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[rgba(242,169,34,0.2)] border-2 border-[#F2A922] rounded-xl p-4 text-center"
                role="alert"
                aria-live="assertive"
              >
                <p className="text-[#EEF4D9] font-serif text-[1.1rem]">
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
          <p className="text-[#85C7B3] font-serif text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.1rem] mb-4">
            Or reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="tel:678-650-6411"
              className="text-[#F2A922] font-serif text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.25rem] xl:text-[1.3rem] font-bold hover:text-[#EEF4D9] transition-colors duration-300 flex items-center gap-2 group"
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
              className="text-[#F2A922] font-serif text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.25rem] xl:text-[1.3rem] font-bold hover:text-[#EEF4D9] transition-colors duration-300 flex items-center gap-2 group"
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
