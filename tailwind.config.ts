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
        background: "#1400ff",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        base: ["Mariupol"],
        heading: ["LeagueGothic-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
