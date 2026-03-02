import React from 'react';

/**
 * Blog Typography Components
 *
 * Provides semantic HTML elements with standardized typography classes
 * based on 2026 professional standards with fluid scaling.
 *
 * WCAG 2.1 AA Compliant:
 * - 16px minimum body text
 * - 1.7+ line height for body text
 * - Relative rem units for 200% zoom support
 * - High contrast ratios (21:1 white on black)
 */

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`font-heading text-h1 font-bold text-white leading-heading ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`font-heading text-h2 font-bold text-white ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`font-heading text-h3 font-semibold ${className}`}>
    {children}
  </h3>
);

export const BodyText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-body leading-relaxed font-body ${className}`}>
    {children}
  </p>
);

export const LeadText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-body-lg leading-relaxed font-body ${className}`}>
    {children}
  </p>
);

export const MetadataText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <span className={`text-body-sm font-body ${className}`}>
    {children}
  </span>
);

/**
 * Typography Scale Reference:
 *
 * H1: 36px → 64px (clamp(2.25rem, 1.75rem + 2.5vw, 4rem))
 * H2: 28px → 40px (clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem))
 * H3: 20px → 26px (clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem))
 *
 * Body: 16px → 18px (clamp(1rem, 0.9rem + 0.5vw, 1.125rem))
 * Body-lg: 18px → 22px (clamp(1.125rem, 1rem + 0.625vw, 1.375rem))
 * Body-sm: 14px → 15px (clamp(0.875rem, 0.85rem + 0.125vw, 0.9375rem))
 *
 * Line Heights:
 * - Headings: 1.2 (tight, professional)
 * - Body: 1.7 (optimal readability)
 * - Relaxed: 1.8 (extra comfortable for long-form)
 */
