import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/data/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 50px rgba(34, 211, 238, 0.22)",
        matrix: "0 0 45px rgba(34, 197, 94, 0.18)",
        xp: "0 20px 60px rgba(0, 0, 0, 0.28)",
      },
      keyframes: {
        "soft-pulse": {
          "0%, 100%": {
            opacity: "0.75",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.02)",
          },
        },
        "scanline-drift": {
          "0%": {
            transform: "translateY(-12px)",
          },
          "100%": {
            transform: "translateY(12px)",
          },
        },
      },
      animation: {
        "soft-pulse": "soft-pulse 2.8s ease-in-out infinite",
        "scanline-drift": "scanline-drift 3.5s linear infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;