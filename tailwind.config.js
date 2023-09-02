/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{html,js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#d5985b',
      }
    }
  },
  plugins: [],
}

