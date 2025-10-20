import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'p > code': {
              backgroundColor: 'rgb(255 255 255 / 1)',
              color: 'rgb(17 24 39 / 1)',
              padding: '0.15rem 0.35rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'p > code::before': { content: 'none' },
            'p > code::after': { content: 'none' },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
