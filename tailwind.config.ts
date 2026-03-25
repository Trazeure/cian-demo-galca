import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008100",
        "primary-hover": "#005900",
        "primary-light": "#f2feea",
        "galca-bg": "#f7fafc",
        "galca-border": "#e2e8f0",
        "galca-text": "#2d3748",
        "galca-text-soft": "#4a5568",
        "galca-muted": "#999999",
        "avatar-yellow": "#f4e04d",
        "input-border": "#b2b2b2",
        "c1-yellow": "#f3c861",
        "c2-orange": "#ff8757",
        "c3-red": "#fa7575",
        "c4-teal": "#80cab0",
        "c5-purple": "#9b92d7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
