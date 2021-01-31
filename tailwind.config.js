// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: {
    content: [
      './src/components/*/.{js,jsx}',
      './src/pages/*/.{js,jsx}',
      './src/templates/*/.{js,jsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    borderRadius: {
      none: '0',
      sm: '0.5rem',
      default: '1rem',
      lg: '1.5rem',
      full: '9999px',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.125em',
      large: '0.625rem',
    },
    extend: {
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      rotate: {
        '-65': '-70deg',
        65: '70deg',
      },
      colors: {
        custom: {
          primary: '#8decfc',
          secondary: '#78daeb',
          tertiary: '#1b8a9e',
          quaternary: '#646464',
        },
        dark: '#121618',
      },
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
