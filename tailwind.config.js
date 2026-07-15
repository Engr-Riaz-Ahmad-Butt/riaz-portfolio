/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        gray: {
          DEFAULT: 'rgb(var(--app-gray-default) / <alpha-value>)',
          50: 'rgb(var(--app-gray-50) / <alpha-value>)',
          100: 'rgb(var(--app-gray-100) / <alpha-value>)',
          200: 'rgb(var(--app-gray-200) / <alpha-value>)',
          300: 'rgb(var(--app-gray-300) / <alpha-value>)',
          400: 'rgb(var(--app-gray-400) / <alpha-value>)',
          500: 'rgb(var(--app-gray-500) / <alpha-value>)',
          600: 'rgb(var(--app-gray-600) / <alpha-value>)',
          700: 'rgb(var(--app-gray-700) / <alpha-value>)',
          800: 'rgb(var(--app-gray-800) / <alpha-value>)',
          900: 'rgb(var(--app-gray-900) / <alpha-value>)',
          950: 'rgb(var(--app-gray-950) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
          muted: 'rgb(var(--primary-muted) / <alpha-value>)',
        },
      },
      boxShadow: {
        card: '0 8px 30px rgb(10 18 20 / 0.08)',
        'card-hover': '0 16px 40px rgb(10 18 20 / 0.12)',
        soft: '0 0 0 1px rgb(var(--app-gray-200) / 0.6), 0 20px 50px rgb(10 18 20 / 0.1)',
      },
      keyframes: {
        open: {
          '0%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        close: {
          to: {
            opacity: 0,
            transform: 'translateX(100%)',
          },
        },
        waving: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'drawer-open': 'open 0.3s ease-out',
        'drawer-close': 'close 0.3s ease-in-out',
        'waving-hand': 'waving 2s linear 3',
      },
    },
  },
  plugins: [],
};
