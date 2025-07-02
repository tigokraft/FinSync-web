// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        // your teal glow from before
        'teal-glow': '0 0 25px rgba(16, 185, 129, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
