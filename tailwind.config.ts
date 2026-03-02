import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '480px',   // Modern phones (390px-479px range)
      'sm': '640px',   // Large phones / Small tablets
      'md': '768px',   // Tablets
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
      '2xl': '1536px', // Extra large desktop
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ['"Exo 2"', 'sans-serif'],
        body: ['var(--font-arno)', 'serif'],
        ui: ['var(--font-arno)', 'serif'],
        exo2: ['"Exo 2"', 'sans-serif'],
        arno: ['var(--font-arno)', 'serif'],
        serif: ['var(--font-arno)', 'serif'],
        sans: ['"Exo 2"', 'sans-serif'],
      },
      fontSize: {
        // Professional fluid typography system (2026 standards)
        // Uses CSS clamp() for smooth scaling across all screen sizes

        // Body text sizes
        'body': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',           // 16px → 18px
        'body-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',   // 18px → 22px (lead/intro text)
        'body-sm': 'clamp(0.875rem, 0.85rem + 0.125vw, 0.9375rem)', // 14px → 15px (metadata)

        // Heading sizes (Perfect Fourth scale - 1.333 ratio)
        'h1': 'clamp(2.25rem, 1.75rem + 2.5vw, 4rem)',            // 36px → 64px
        'h2': 'clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem)',          // 28px → 40px
        'h3': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',        // 20px → 26px
      },
      lineHeight: {
        'heading': '1.2',      // Tight for headings (professional)
        'body': '1.7',         // Optimal for body text readability
        'relaxed': '1.8',      // Extra comfortable for long-form content
      },
    },
  },
  plugins: [],
};
export default config;
