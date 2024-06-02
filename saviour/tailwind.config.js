/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saviour: ['"ZCOOL KuaiLe"', 'sans-serif'],
        connectwallet: ['"Poppins"', 'sans-serif'],
        herofont: ['"Shojumaru"', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [],
}