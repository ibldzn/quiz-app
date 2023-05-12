/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        millionaire:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), #020230), url('bg.jpg')",
      },
    },
  },
  plugins: [],
};
