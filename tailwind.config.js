/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rgba-gray": "rgba(255,255,255,0.6)"
      }
    },
  },
  plugins: [],
}

