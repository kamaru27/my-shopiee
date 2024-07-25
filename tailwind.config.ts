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
      fontSize: {
        //heading for Desktop
        'global-font-h1': ['3.5rem', '1.1'],
        'global-font-h2': ['3rem', '1.2'],
        'global-font-h3': ['2rem', '1.2'],
        'global-font-h4': ['1.5rem', '1.2'],
        'global-font-h5': ['1.125rem', '1.2'],
        'global-font-h6': ['1.875rem', '1.375'],
        'global-font-h7': ['2.25rem', '3.3rem'],
        //text
        'global-font-text1': ['1.125rem', '1.2'],
        'global-font-text2': ['1rem', '1.2'],
        'global-font-text3': ['0.75rem', '1.4'],
        'global-font-text4': ['1rem', '1.5'],
      },
      colors: {
        'globalblue': '#00AEEF',
      }
    },
  },
  plugins: [],
};
export default config;
