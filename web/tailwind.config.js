module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        colors: {
            white: {
                hover: '#f5f5f5',
                selected: '#f1f1f1',
                seperator: "#E9E9E9"
            },
            accent: '#695cff',
            text: '#2d3748',
        },
        extend: {
            borderRadius: {
                5: "5px",
                8: "8px",
                10: "10px",
                20: "20px",
                40: "40px",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}