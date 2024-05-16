import type { Config } from 'tailwindcss';

// @ts-ignore
// @ts-ignore
// @ts-ignore
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#121234FF',
        "primary-light" : '#1c1c46',

        secondary: '#0094C6',
        tertiary: '#005E7C',
        quaternary: '#000022',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeDown: 'fadeDown 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeOut: 'fadeOut 1s ease-out forwards',
      },
      animationDelay: {
        0: '0ms',
        200: '200ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1000: '1000ms',
        1200: '1200ms',
        1400: '1400ms',
        1600: '1600ms',
        1800: '1800ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const delays = theme('animationDelay') || {};
      const utilities = Object.entries(delays).map(([key, value]) => ({
        [`.delay-${key}`]: {
          'animation-delay': value,
        },
      }));
      addUtilities(utilities, ['responsive', 'hover']);
    },
  ],
};

export default config;
