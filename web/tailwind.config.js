module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      dark: {
        bg: "#242832",
        fg: "#ffffff",
        textMuted: "#E5E5E5",
        bgMuted1: "#1C212D",
        bgMuted2: "#1C212D75",
        bgMuted3: "#292F40",
        color: {
          accent: "#695cff",
          yellow: "#EFA119",
        }
      }
    },
    variants: {},
    plugins: [],
  }
}