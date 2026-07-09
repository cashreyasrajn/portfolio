import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        navy: {
          DEFAULT: "#0b1e3d",
          light: "#152d57",
          dark: "#070f1e",
        },
        gold: {
          DEFAULT: "#5b7a94",
          light: "#7a9ab0",
          dark: "#3d5a70",
        },
        cream: "#f1f3f5",
      },
      borderRadius: {
        DEFAULT: "0",
        sm: "2px",
        md: "4px",
        lg: "6px",
        xl: "8px",
      },
      fontFamily: {
        headline: ["var(--font-headline)", "Cormorant Garamond", "Times New Roman", "serif"],
        body: ["Segoe UI", "-apple-system", "system-ui", "sans-serif"],
        brand: ["var(--font-brand)", "Trajan Pro", "Cormorant Garamond", "Times New Roman", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
