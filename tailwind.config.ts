import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#4A2E22',
          soft: '#6B4F3F',
          faint: '#9C8170',
        },
        paper: {
          DEFAULT: '#FBF6EE',
          raised: '#FFFFFF',
        },
        amber: {
          DEFAULT: '#E87521',
          soft: '#FCE3C9',
          deep: '#C25E12',
        },
        sage: {
          DEFAULT: '#5B8A6B',
          soft: '#E1ECE3',
        },
        terracotta: {
          DEFAULT: '#C25640',
          soft: '#F5DFD8',
        },
        line: '#EBDFD0',
      },
      boxShadow: {
        sm: '0 4px 16px rgba(74, 46, 34, 0.07)',
        DEFAULT: '0 8px 30px rgba(74, 46, 34, 0.11)',
        lg: '0 20px 60px rgba(74, 46, 34, 0.18)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-1': 'float 6s ease-in-out 1.2s infinite',
        'float-2': 'float 6s ease-in-out 2.4s infinite',
        'float-3': 'float 6s ease-in-out 0.6s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
