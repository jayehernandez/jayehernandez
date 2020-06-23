const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.njk',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'DM Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      borderRadius: {
        'xl': '1.5rem',
        'xxl': '5rem',
      },
      colors: {
        'teal': '#809888',
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'h1': {
          fontFamily: 'Hillray-Regular',
        },
      })
    })
  ],
}
