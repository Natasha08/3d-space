/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'europa-illustration': 'url(/europa_surface_illustration.jpg)',
      },
      colors: {
        'transparent': 'rgba(0, 0, 0, 0)',
        'interactive': 'var(--nebula-orange)', // nebula orange
        'text': 'var(--text-white)',           // starlight white
        'muted-gold': 'var(--muted-gold)',
      },
    },
  },
  plugins: [],
};
