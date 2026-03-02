/**
 * Global TypeScript type declarations
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
    _fbq: any;
    clarity: (...args: any[]) => void;
  }
}

export {};
