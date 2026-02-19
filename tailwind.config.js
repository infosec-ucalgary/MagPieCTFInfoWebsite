/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        crtBackground: 'var(--crt-background)',
        crtText: 'var(--crt-text)',
      },
      fontFamily: {
        crt: ['Courier New', 'Courier', 'monospace'],
        play: ['Play', 'sans-serif'],
      },
      textShadow: {
        crt: 'var(--crt-text-shadow)',
      },
      backgroundImage: {
        crtBefore: 'var(--crt-before)',
        crtAfter: 'var(--crt-after)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}