/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F2EB',
        cream: '#ECE5D8',
        sand: '#E2DAC9',
        charcoal: '#1F1D1A',
        espresso: '#28231E',
        taupe: '#9E9080',
        warmbrown: '#7A5E44',
        bronze: '#59493B',
        gold: {
          DEFAULT: '#BF9C60',
          light: '#D6BA85',
          dark: '#96743A'
        },
        sage: '#7F8875',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        architectural: '0.18em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(36, 35, 33, 0.05)',
        'elevated': '0 12px 32px -4px rgba(36, 35, 33, 0.10)',
        'modal': '0 24px 48px -12px rgba(36, 35, 33, 0.16)',
      }
    },
  },
  plugins: [],
}
