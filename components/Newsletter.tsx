'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail(''); // Clear form
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section className="relative py-[80px] px-6 bg-transparent">
      <motion.div
        className="max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-bold text-white mb-4 leading-[1.1]">
            Get Meta Ads Insights Delivered
          </h2>
          <p className="font-body text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] text-gray-300 leading-[1.6]">
            New blog posts, case studies, and Meta advertising tips sent to your inbox.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-[18px] py-[14px] font-body text-[1rem] bg-[rgba(26,26,26,0.8)] border-2 border-[rgba(95,169,159,0.3)] rounded-lg text-white placeholder:text-[rgba(255,255,255,0.5)] focus:border-[#5FA99F] focus:outline-none focus:shadow-[0_0_30px_rgba(95,169,159,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(95,169,159,0.2)]"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8 py-[14px] bg-transparent text-white border-2 border-white rounded-lg font-heading font-semibold text-[0.875rem] cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:scale-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap min-w-[140px]"
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>

          {/* Status Messages */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`px-4 py-3 rounded-lg text-center font-body text-[0.9375rem] ${
                status === 'success'
                  ? 'bg-[rgba(95,169,159,0.2)] border-2 border-[#5FA99F] text-[#85C7B3]'
                  : 'bg-[rgba(220,38,38,0.2)] border-2 border-[rgba(220,38,38,0.5)] text-[#fca5a5]'
              }`}
            >
              {message}
            </motion.div>
          )}
        </form>

        {/* Privacy Note */}
        <p className="text-center text-gray-400 text-sm mt-4 font-body">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}
