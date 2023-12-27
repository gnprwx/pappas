/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
  theme: {
    extend: {},
    fontFamily: { mono: ["Fira Code", "monospace"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
