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
        },
      },
    },
    extend: {
      borderRadius: {
        5: "5px",
        8: "8px",
        10: "10px",
        20: "20px",
        40: "40px",
        half: "50%",
      },
      colors: {
        bluegrey: "#9099a8",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        4.5: "1.1rem",
        7.5: "30px",
        "28rem": "28rem",
        "30rem": "30rem",
        "35rem": "35rem",
        "40rem": "40rem",
        "45rem": "45rem",
        "50rem": "50rem",
        "55rem": "55rem",
        "9vh": "9vh",
      },
      fontSize: {
        md: "0.9rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
