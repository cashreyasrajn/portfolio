import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
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
        surface: {
          DEFAULT: "#f8f9fa",
          dim: "#d9dadb",
          bright: "#f8f9fa",
          container: {
            lowest: "#ffffff",
            low: "#f3f4f5",
            DEFAULT: "#edeeef",
            high: "#e7e8e9",
            highest: "#e1e3e4",
          },
          tint: "#3f6653",
          variant: "#e1e3e4",
        },
        on: {
          surface: "#191c1d",
          "surface-variant": "#414844",
        },
        inverse: {
          surface: "#2e3132",
          "on-surface": "#f0f1f2",
          primary: "#a5d0b9",
        },
        outline: {
          DEFAULT: "#717973",
          variant: "#c1c8c2",
        },
        "primary-container": "#1b4332",
        "on-primary-container": "#86af99",
        "primary-fixed": "#c1ecd4",
        "primary-fixed-dim": "#a5d0b9",
        "on-primary-fixed": "#002114",
        "on-primary-fixed-variant": "#274e3d",
        "secondary-container": "#fed65b",
        "on-secondary-container": "#745c00",
        "secondary-fixed": "#ffe088",
        "secondary-fixed-dim": "#e9c349",
        "on-secondary-fixed": "#241a00",
        "on-secondary-fixed-variant": "#574500",
        tertiary: "#002d1c",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#00452e",
        "on-tertiary-container": "#75b393",
        "tertiary-fixed": "#b1f0ce",
        "tertiary-fixed-dim": "#95d4b3",
        "on-tertiary-fixed": "#002114",
        "on-tertiary-fixed-variant": "#0e5138",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "section-padding": "80px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        gutter: "24px",
        "container-max": "1280px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontFamily: {
        headline: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "48px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg-mobile": [
          "32px",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        "headline-md": [
          "32px",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        "headline-md-mobile": [
          "24px",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        "title-sm": [
          "18px",
          { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "600" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "1.7", fontWeight: "400" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "1.6", fontWeight: "400" },
        ],
        "label-caps": [
          "12px",
          { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" },
        ],
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
