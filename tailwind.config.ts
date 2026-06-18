import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "var(--bg-main)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          "card-hover": "var(--bg-card-hover)",
        },
        ink: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          cyan: "var(--cyan)",
          blue: "var(--blue)",
          purple: "var(--purple)",
          magenta: "var(--magenta)",
        },
        line: {
          DEFAULT: "var(--border-default)",
          cyan: "var(--border-cyan)",
          purple: "var(--border-purple)",
        },
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        large: "var(--radius-large)",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-cyan": "0 0 40px var(--glow-cyan)",
        "glow-blue": "0 0 40px var(--glow-blue)",
        "glow-purple": "0 0 44px var(--glow-purple)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
