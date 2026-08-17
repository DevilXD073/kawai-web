import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        kawaii: {
          pink: "#FF4FA3",
          hot: "#FF2F92",
          soft: "#FF9DCA",
          magenta: "#D92687"
        }
      },
      boxShadow: {
        glow: "0 0 50px rgba(255,79,163,.18)"
      }
    }
  },
  plugins: []
};
export default config;
