import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ocean-blue': '#5175FF',
        'sky-blue': '#829CFF',
        'night-slate': '#333950',
        'dark-slate': '#25293A',
        'grey-slate': '#747B95',
        'blood-orange': '#F05B5B',
      }
    },
  },
  plugins: [],
}
export default config
