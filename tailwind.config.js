/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#6267F1",
        "primary-2": "#8997F3",
        secondary: "#56D087",
        light: "#E2EFF0",
        dark: "#2C3144",
      },

      fontFamily: {
        serif: "Roboto Slab",
        sans: "Noto Sans",
        mono: "Jetbrains Mono",
      },
    },
  },
  plugins: [],
};
