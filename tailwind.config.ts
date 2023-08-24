import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#010409",
          900: "#0d1117",
          800: "#161b22",
          700: "#21262d",
          600: "#30363d",
          500: "#484f58",
          400: "#6e7681",
          300: "#8b949e",
          200: "#b1bac4",
          100: "#c9d1d9",
          50: "#f0f6fc",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
