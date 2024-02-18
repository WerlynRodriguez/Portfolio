/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["pastel"],
        }
      },
      'dark'
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
