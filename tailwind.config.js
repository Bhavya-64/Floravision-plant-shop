/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1a2318',
        'bg-card': '#1e2a1c',
        'bg-card2': '#212d1f',
        'bg-lighter': '#243022',
        border: '#2e3d2b',
        green: {
          primary: '#4a7c59',
          light: '#6aaf7a',
          accent: '#8bc34a',
          pale: '#c8e6c9',
        },
        text: {
          primary: '#e8f0e0',
          secondary: '#a8b8a0',
          muted: '#6b7c65',
        },
        gold: '#f4c430',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a2318 0%, #243022 60%, #1a2318 100%)',
      },
    },
  },
  plugins: [],
}
