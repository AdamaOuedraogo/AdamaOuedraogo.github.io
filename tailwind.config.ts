import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Calm "lab notebook" palette: warm paper + ink + one restrained accent.
        ink: {
          DEFAULT: "#15150f", // near-black, high contrast like filiphric.com
          soft: "#393933", // body text — much darker/solid than before
          faint: "#63635b", // meta text — still passes AA on paper
        },
        paper: {
          DEFAULT: "#faf9f6",
          raised: "#ffffff",
        },
        accent: {
          // A calm, technical signal color used sparingly.
          DEFAULT: "#0f766e", // teal-700
          soft: "#14b8a6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#393933",
            "--tw-prose-headings": "#15150f",
            "--tw-prose-bold": "#15150f",
            "--tw-prose-links": "#0c5e57",
            fontWeight: "450",
            maxWidth: "68ch",
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
