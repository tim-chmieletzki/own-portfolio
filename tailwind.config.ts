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
        foreground: "#141414",
        background: "#000000",
        textPrimary: "#FFFFFF",
        textSecondary: "#C4C4C4",
      },
    },
  },
  plugins: [],
};
export default config;
