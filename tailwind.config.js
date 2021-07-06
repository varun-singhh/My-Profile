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
      backgroundImage: {
        farm: "url('/src/styles/static/farm.svg')",
        chat: "url('/src/styles/static/chat.svg')",
        music: "url('/src/styles/static/music.svg')",
        web: "url('/src/styles/static/web.svg')",
        contact: "url('/src/styles/static/contact.svg')",
        search: "url('/src/styles/static/search.svg')",
        npm: "url('/src/styles/static/npm.svg')",
        me: "url('/src/styles/static/me.png')",
        memory: "url('/src/styles/static/memory.svg')",
        rehab: "url('/src/styles/static/rehab.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
