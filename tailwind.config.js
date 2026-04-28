/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        electric: "#00AEEF",
        cyanDeep: "#006D96",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,174,239,.28)",
        "glow-strong": "0 0 48px rgba(0,174,239,.45)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(0,174,239,.16), transparent 34%), radial-gradient(circle at 80% 10%, rgba(255,255,255,.08), transparent 22%), linear-gradient(180deg, #050505 0%, #071014 48%, #050505 100%)",
      },
    },
  },
  plugins: [],
};
