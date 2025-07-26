/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4fbf8b',        // Replace with your actual primary color
        'primary-dull': ' #44ae7c', // Replace with your dull version
      },
    },
  },
  plugins: [],
}