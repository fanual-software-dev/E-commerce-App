import type { Config } from "tailwindcss";

interface ExtendedConfig extends Config {
  daisyui?: {
    themes: string[];
  };
}

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundColor:{
        dust:"#1f216816",
        darkdust:"blue"
      },

      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        robotMono:['Roboto Mono', 'monospace'],
      },
    },
  },
} satisfies ExtendedConfig;

 

export const daisyui = {
  themes: [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
  ],
};