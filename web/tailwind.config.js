module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
      colors: {
          white: {
              hover: '#f5f5f5',
              'hover-select': '#d5d5d5',
              selected: '#f1f1f1',
              seperator: "#E9E9E9",
              DEFAULT: '#ffffff'
          },
          accent: '#695cff',
          secondary: '#A2B1FF',
          text: '#2d3748',
          gray: '#9099a8',
          gray_light: '#515967',
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
    spacing: {
      112: "28rem",
      120: "30rem",
      160: "40rem",
      "9vh": "9vh",
      "30rem": "30rem",
    },
  },
};
