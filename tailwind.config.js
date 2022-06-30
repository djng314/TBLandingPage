/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     animation: {
      'spin-slow': 'spin 20s linear infinite',
      'bounce':'bounce 5s linear infinite',
      'ping':'ping 5s linear infinite',
     },
    extend: {},
  },
  plugins: [],
}
