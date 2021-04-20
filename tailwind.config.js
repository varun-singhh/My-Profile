module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2e373b',
        'light-gray': '#242B2E',
        'cyan-color': '#03C6C7',
        'battle-gray': '#758283',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
