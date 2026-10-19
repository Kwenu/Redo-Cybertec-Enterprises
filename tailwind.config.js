export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#06111F',
          900: '#0A1B33',
          800: '#0F2747',
          700: '#17345C',
          600: '#24476F',
        },
        brand: {
          50: '#EEF4FB',
          100: '#D9E6F6',
          200: '#A9C6EA',
          300: '#7DA9DF',
          500: '#2F74CC',
          600: '#1D5FB4',
          700: '#174C91',
        },
        aqua: {
          50: '#E7F7F6',
          100: '#C5EDEA',
          300: '#6FD3CD',
          500: '#14A3A0',
          600: '#0E8A87',
          700: '#0A6765',
        },
        royal: {
          50: '#EAF0FB',
          100: '#CDDCF5',
          300: '#8FB0EA',
          500: '#203F8F',
          600: '#1A3577',
          700: '#152B61',
        },
        coral: {
          50: '#FDEFEC',
          100: '#FAD5CD',
          300: '#F2957F',
          500: '#E5573F',
          600: '#C8432D',
          700: '#9C3422',
        },
        iris: {
          50: '#F1EFFC',
          100: '#DDD7F7',
          300: '#A898EA',
          500: '#6E56CF',
          600: '#5A43B5',
          700: '#45338C',
        },
        ink: '#1C2430',
        muted: '#5B6675',
        surface: '#F4F6F9',
        line: '#E1E6ED',
        eco: {
          50: '#EDF6F0',
          100: '#D3EBDB',
          300: '#7CC499',
          500: '#3A9A62',
          600: '#2E7D4F',
          700: '#24633F',
        },
      },
      maxWidth: {
        site: '120rem',
      },
    },
  },
}
