import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "40px",
        lg: "112px",
      },

      screens: {
        sm: "375px",
        md: "768px",
        lg: "1400px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1400px",
    },
    extend: {
      colors: {
        background: "#0F0F0F",
        textPrim: "#E3E3E1",
        textSec: "#999999",
        primary: "#ED481D",
      },
    },
  },
  plugins: [],
};
export default config;
