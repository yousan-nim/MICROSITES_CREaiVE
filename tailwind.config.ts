import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        xxxl: "1536px",
        hv: "1440px",
      },
      fontSize: {},
      fontFamily: {
        centrallMeduim: ["Centrall-Medium", "sans-serif"],
        gothamLight: ["Gotham-Light", "sans-serif"],
        gothamBook: ["Gotham-Book", "sans-serified"],
        sctoBold: ["SCTO", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;