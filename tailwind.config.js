/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      extend: {
        colors:{
          'baseBackground':'#f9f5f0',
          'primary':'#F4991A'
        },
        fontFamily: {
          inter: ["var(--font-inter)"],
          slab: ["var(--font-roboto-slab)"],
          press :["var(--font-press)"]
        },
    }
  },
  plugins: [],
}
