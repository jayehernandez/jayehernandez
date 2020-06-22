const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'DM Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      borderRadius: {
        'xl': '1.5rem',
      },
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
