import type { Config } from "tailwindcss";

/**
 * Design Tokens — هوية «البيني»
 * لوحة: حبر، ورق، رمل، نحاس، نيلي
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1C2430", soft: "#2A3442" },
        paper: "#FAF6EE",
        sand: { DEFAULT: "#EDE4D3", deep: "#E0D4BD" },
        copper: { DEFAULT: "#B0662C", deep: "#8F4F1D" },
        indigo2: "#33518A",
        body: "#3A3F47",
        line: "#D8CDB8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: { content: "72rem" },
      borderRadius: { card: "1rem" },
    },
  },
  plugins: [],
};
export default config;
