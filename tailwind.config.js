/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '10rem',
      },
      center: true
    },
    extend: {},
  },
  plugins: [],
}