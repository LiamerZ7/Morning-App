import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101419',
        mist: '#f4f7fb',
        calm: '#dce7ff',
        accent: '#5b7fff',
      },
      boxShadow: {
        soft: '0 12px 30px -20px rgba(16, 20, 25, 0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config;
