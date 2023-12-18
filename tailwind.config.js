/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rgba": "rgba(255,255,255,0.4)"
      }
    },
  },
  plugins: [],
}

