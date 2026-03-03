'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { trackEvent, trackLeadWithUserData } from '@/components/MetaPixel';
import { trackFormSubmission, trackEvent as trackGA4Event } from '@/components/GoogleAnalytics';

interface ContactFormProps {
  variant?: 'page' | 'homepage';
}

export default function ContactForm({ variant = 'page' }: ContactFormProps) {
  const isHomepage = variant === 'homepage';

  const [formData, setFormData] = useState(
    isHomepage
      ? { firstName: '', lastName: '', email: '', phone: '', company: '', website: '' }
      : { name: '', email: '', phone: '', businessName: '', message: '' }
  );
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');
  const [formStarted, setFormStarted] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length <= 3) return phoneNumber;
    if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
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

    if (!formStarted && value.length > 0) {
      setFormStarted(true);
      trackEvent('InitiateCheckout', {
        content_name: `Contact Form Started (${variant})`,
        content_category: 'Contact',
      });
      trackGA4Event('form_start', {
        form_name: 'Contact Form',
        form_destination: 'contact',
      });
    }

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData({ ...formData, phone: formatted });
      if (value) validatePhone(formatted);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone && !validatePhone(formData.phone)) return;

    setStatus('loading');

    try {
      const submitData = isHomepage
        ? {
            name: `${(formData as { firstName: string; lastName: string }).firstName} ${(formData as { firstName: string; lastName: string }).lastName}`.trim(),
            email: formData.email,
            phone: formData.phone,
            businessName: (formData as { company: string }).company,
            website: (formData as { website: string }).website,
            message: `Homepage inquiry from ${(formData as { company: string }).company}`,
          }
        : formData;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const firstName = isHomepage
        ? (formData as { firstName: string }).firstName
        : formData.email.split('@')[0];
      const lastName = isHomepage
        ? (formData as { lastName: string }).lastName
        : undefined;

      trackLeadWithUserData(`Contact Form Submission (${variant})`, 1.0, {
        email: formData.email,
        phone: formData.phone || undefined,
        firstName,
        lastName: lastName || undefined,
      });

      trackFormSubmission('Contact Form', 1.0);
      setStatus('success');

      if (isHomepage) {
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', website: '' });
      } else {
        setFormData({ name: '', email: '', phone: '', businessName: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  const inputClass = `w-full px-5 py-4 bg-[rgba(26,26,26,0.6)] border-2 border-[rgba(95,169,159,0.3)] rounded-xl text-white font-body text-[0.95rem] sm:text-[1rem] outline-none transition-all duration-300 focus:border-[#5FA99F] focus:shadow-[0_0_20px_rgba(95,169,159,0.3)] focus:ring-2 focus:ring-[#5FA99F] focus:ring-opacity-30 placeholder:text-gray-500`;

  const labelClass = 'block text-white text-[0.95rem] sm:text-[1rem] font-heading mb-2 font-bold';

  if (isHomepage) {
    return (
      <motion.div
        className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[rgba(95,169,159,0.6)] transition-all duration-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="hp-firstName" className={labelClass}>First Name *</label>
              <input type="text" id="hp-firstName" name="firstName" value={(formData as { firstName: string }).firstName} onChange={handleChange} required className={inputClass} placeholder="John" />
            </div>
            <div>
              <label htmlFor="hp-lastName" className={labelClass}>Last Name *</label>
              <input type="text" id="hp-lastName" name="lastName" value={(formData as { lastName: string }).lastName} onChange={handleChange} required className={inputClass} placeholder="Smith" />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="hp-email" className={labelClass}>Email *</label>
              <input type="email" id="hp-email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="hp-phone" className={labelClass}>Phone</label>
              <input
                type="tel"
                id="hp-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`${inputClass} ${phoneError ? '!border-red-500' : ''}`}
                placeholder="(555) 123-4567"
                maxLength={14}
              />
              {phoneError && <p className="mt-1 text-red-400 text-[0.85rem] font-body">{phoneError}</p>}
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="hp-company" className={labelClass}>Company *</label>
            <input type="text" id="hp-company" name="company" value={(formData as { company: string }).company} onChange={handleChange} required className={inputClass} placeholder="Your Business LLC" />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="hp-website" className={labelClass}>Website</label>
            <input type="url" id="hp-website" name="website" value={(formData as { website: string }).website} onChange={handleChange} className={inputClass} placeholder="https://yourbusiness.com" />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-10 py-5 rounded-xl text-[1rem] sm:text-[1.125rem] font-bold font-heading transition-all duration-300 shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Get Your Free Estimate'}
            </button>
          </div>

          {status === 'success' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-[rgba(95,169,159,0.2)] border-2 border-[#5FA99F] rounded-xl p-4 text-center">
              <p className="text-white font-body text-[1rem]">Thanks for reaching out! We&apos;ll get back to you within 24 hours.</p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-[rgba(239,68,68,0.2)] border-2 border-red-400 rounded-xl p-4 text-center">
              <p className="text-white font-body text-[1rem]">Something went wrong. Please email us at hello@driveleadmedia.com</p>
            </motion.div>
          )}
        </form>
      </motion.div>
    );
  }

  // Page variant - original contact page form
  return (
    <motion.div
      className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-8 sm:p-10 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[rgba(95,169,159,0.6)] hover:shadow-[0_0_40px_rgba(95,169,159,0.2)] transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input type="text" id="name" name="name" value={(formData as { name: string }).name} onChange={handleChange} required className={inputClass} placeholder="John Smith" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputClass} ${phoneError ? '!border-red-500' : ''}`}
            placeholder="(555) 123-4567"
            maxLength={14}
          />
          {phoneError && <p className="mt-1 text-red-400 text-[0.85rem] font-body">{phoneError}</p>}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}>
          <label htmlFor="businessName" className={labelClass}>Business Name *</label>
          <input type="text" id="businessName" name="businessName" value={(formData as { businessName: string }).businessName} onChange={handleChange} required className={inputClass} placeholder="Your Business LLC" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
          <label htmlFor="message" className={labelClass}>Tell Us About Your Goals *</label>
          <textarea id="message" name="message" value={(formData as { message: string }).message} onChange={handleChange} required rows={6} className={`${inputClass} resize-none`} placeholder="Tell us about your business, your goals, and what you're hoping to achieve with Meta advertising..." />
        </motion.div>

        <motion.div className="pt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-10 py-5 rounded-xl text-[1rem] sm:text-[1.125rem] font-bold font-heading transition-all duration-300 shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Get Your Free Strategy Call'}
          </button>
        </motion.div>

        {status === 'success' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-[rgba(95,169,159,0.2)] border-2 border-[#5FA99F] rounded-xl p-4 text-center">
            <p className="text-white font-body text-[1rem]">Thanks for reaching out! We&apos;ll get back to you within 24 hours.</p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-[rgba(239,68,68,0.2)] border-2 border-red-400 rounded-xl p-4 text-center">
            <p className="text-white font-body text-[1rem]">Something went wrong. Please email us at hello@driveleadmedia.com</p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
