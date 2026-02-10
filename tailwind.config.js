/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            slideLeft: "slideLeft 0.4s ease",
            slideRight: "slideRight 0.4s ease",
        },
        keyframes: {
            slideLeft: {
            "0%": { opacity: 0, transform: "translateX(50px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
            },
            slideRight: {
            "0%": { opacity: 0, transform: "translateX(-50px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
            },
        },
        }

  },
  plugins: [],
};
