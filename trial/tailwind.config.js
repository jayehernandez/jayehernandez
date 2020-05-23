const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'Open Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
    },
    maxWidth: {
      'xl': '1000px',
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'h1': {
          fontSize: config('theme.fontSize.7xl'),
          fontFamily: 'Hillray-Regular',
        },
        'h2': {
          fontSize: config('theme.fontSize.6xl'),
          fontFamily: 'Hillray-Regular',
        },
        'h3': {
          fontSize: config('theme.fontSize.4xl'),
          fontFamily: 'Hillray-Regular',
        },
      })
    })
  ],
}
