
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hoc/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['BR Firma', 'sans-serif'],
      },
      outline: {
        blue: ['2px solid #0000ff', '1px'],
      },
      colors: {
        /* BEGIN legacy colors */
        // TODO: replace all instances of these with iris/acrylic
        transparent: "transparent",
        dark: {
          grey: "#F5F5F5",
          bg: "#242832",
          fg: "#ffffff",
          textMuted: "#E5E5E5",
          bgMuted1: "#1C212D",
          bgMuted2: "#272D3D",
          bgMuted3: "#1C212D75",
          bgMuted4: "#292F40",
          border1: "#2B2F39",
          color: {
            accent: "#5D6BFF",
            yellow: "#EFA119",
          },
        },
        /* END legacy colors */
        iris: {
          10: "#F0F2FF",
          20: "#BDC2FF",
          30: "#7581FF",
          40: "#5261FF",
          DEFAULT: "#5261FF",
          50: "#424FD6",
          60: "#2E39AD",
          70: "#1C2582"
        },
        acrylic: {
          10: "#F7F7F8",
          20: "#DBDBE1",
          30: "#C1C2CD",
          40: "#A5A7B6",
          50: "#76788F",
          60: "#5E6073",
          70: "#22232A",
          80: "#0B0C0E"
        }
      },
    },
    variants: {},
    plugins: [
      require("@tailwindcss/forms")
    ],
  },
};
