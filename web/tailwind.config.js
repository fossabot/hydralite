module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      white: {
        hover: "#f5f5f5",
        "hover-select": "#d5d5d5",
        selected: "#f1f1f1",
        seperator: "#E9E9E9",
        "": "#fff"
      },
      accent: "#695cff",
      text: "#2d3748",
      muted: "#55656F",
      gray: "#9099a8",
      yellow: "#EFA119",
      transparent: "transparent",
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
        "4.5": "1.1rem",
        112: "28rem",
        120: "48rem",
        160: "40rem",
        "9vh": "9vh",
        "30rem": "30rem",
      },
      fontSize: {
        "md": "0.9rem"
      }
    },
  },
  variants: {},
  plugins: [],
};
