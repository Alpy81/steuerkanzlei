import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        petrol:      '#146574',
        'petrol-dark':  '#0d4a56',
        'petrol-light': '#1a7d90',
        'cyan-bright':  '#5ce1e6',
        'cyan-vivid':   '#45e7ff',
        'text-light':   '#eef1f6',
        'black-soft':   '#0f1618',
        'black-mid':    '#162022',
        'gray-muted':   '#8fa3a8',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans:    ['DM Sans', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      screens: {
        'xs':   '480px',
        'sm':   '640px',
        'md':   '768px',
        'lg':   '1024px',
        'xl':   '1280px',
        '2xl':  '1536px',
        '3xl':  '1920px',
        '4xl':  '2560px',
      },
    },
  },
  plugins: [],
}

export default config
