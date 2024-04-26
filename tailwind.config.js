/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      "dark",
      {
        obsidian: {
          ...require("daisyui/src/theming/themes")["black"],
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#7480ff",
          neutral: "#f5f5f5",
          "neutral-content": "#1f2937",
        }
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
