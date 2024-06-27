/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-circle-red-blue":
          "radial-gradient(circle, rgba(255,0,0,0.2), rgba(0,0,255,0.2))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
