const { extend } = require('./configs/tailwind')
const variantArr = ['responsive', 'hover', 'focus', 'group-hover']

module.exports = {
  content: [
    './layouts/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend
  },
  variants: {
    backgroundColor: variantArr,
    textColor: variantArr,
    translate: variantArr,
    boxShadow: [...variantArr, 'focus-within'],
    opacity: variantArr,
  }
}
