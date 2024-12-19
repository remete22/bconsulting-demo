import defaultTheme from 'tailwindcss/defaultTheme'

const generateColors = (name: string) => {
  const colorObject = {
    '50': `rgb(var(--${name}-50) / <alpha-value>)`,
  }

  for (let i = 0; i < 9; i++) {
    colorObject[`${i + 1}00`] = `rgb(var(--${name}-${i + 1}00) / <alpha-value>)`
  }

  colorObject['950'] = `rgb(var(--${name}-950) / <alpha-value>)`

  return colorObject;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', ...defaultTheme.fontFamily.sans],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '2xl': defaultTheme.screens.xl,
      },
      colors: {
        primary: generateColors('primary'),
        secondary: generateColors('secondary'),
        'bg-gray': `rgb(var(--bg-gray) / <alpha-value>)`,
        'bg-gray-200': `rgb(var(--bg-gray-200) / <alpha-value>)`,
        fontcolor: `rgb(var(--fontcolor) / <alpha-value>)`,
        'fontcolor-dark': `rgb(var(--fontcolor-dark) / <alpha-value>)`,
      },
      borderRadius: {
        10: '10px'
      },
      lineHeight: {
        '1.2': '1.2'
      },
      letterSpacing: {
        '0.2': '0.2px'
      }
    },
  },
  plugins: [],
}

