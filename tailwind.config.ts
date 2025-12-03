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
    },
  },
  plugins: [],
};
export default config;
