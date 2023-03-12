/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte,ts}",
    "./components/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["General Sans", "system-ui", "sans-serif"],
        mono: ["Azeret Mono", "system-ui", "monospace"],
      },
    },
  },
  plugins: [],
};
