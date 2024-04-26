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
      colors: {
        lernib1: {
          DEFAULT: '#FAFAFA',
          400: '#c7c7c7',
          800: '#FAFAFA'
        },
        lernib2: {
          DEFAULT: '#054CC0',
          300: '#054CC0',
          700: '#c6dbfe',
          900: '#f8fbff'
        },
        lernib3: '#FC5836',
        lernib4: '#FEC305',
        lernib5: '#26C465',
      }
    },
  },
  plugins: [],
};
export default config;
