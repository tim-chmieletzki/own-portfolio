import { getBinaryMetadata } from "next/dist/build/swc";
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
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "393px",
        md: "1180px",
        lg: "1512px",
      },
    },
    screens: {
      sm: "393px", // Mobile: 393 x 852
      md: "1180px", // Tablet: 1180 x 820
      lg: "1512px", // Desktop: 1512 x 982
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
export default config;
