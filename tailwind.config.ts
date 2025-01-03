import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        // primary: {
        //   DEFAULT: "hsl(var(--primary) / <alpha-value>)",
        //   foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
        //   foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        // },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        black: {
          DEFAULT: "#000000",
          100: "#1C1D22",
          90: "#2C2D33",
          80: "#33343A",
          70: "#37393F",
          60: "#45464E",
          50: "#53545C",
          40: "#6E7079",
          30: "#8B8D97",
          20: "#A6A8B1",
          10: "#BEC0CA",
        },
        primary: {
          100: "#5570F1",
          90: "#6078EC",
          80: "#6D83EC",
          70: "#7C8FEC",
          60: "#8899E9",
          50: "#97A5EB",
          40: "#ABB5E9",
          30: "#B6BFE8",
          20: "#C4CAE8",
          10: "#DBDEEE",
        },
        secondary: {
          100: "#FFCC91",
          90: "#FFD29E",
          80: "#FFDAAE",
          70: "#FFDFBA",
          60: "#FFE5C8",
          50: "#FFEAD1",
          40: "#FFF0DE",
          30: "#FFF2E2",
          20: "#FEF5EA",
          10: "#FEF9F2",
        },
        "t-red": "#CC5F5F",
        "t-green": "#519C66",
        "t-grey": "#E1E2E9",
        mainBg: "#F4F5FA",
        stroke: "#F1F3F9",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
    },
  },

  plugins: [typography, forms, containerQueries],
} satisfies Config;
