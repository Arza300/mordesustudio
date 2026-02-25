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
        luxury: {
          dark: "#0a0a0b",
          card: "rgba(18, 18, 20, 0.85)",
          accent: "#c9b896",
          "accent-dim": "rgba(201, 184, 150, 0.4)",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
