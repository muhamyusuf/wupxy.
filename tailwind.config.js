/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '300px',
        tablet: '640px',
        laptop: '1024px',
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        blue: '#001462',
        army: '#003E13',
        gray: '#c7c7c7',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        amiko: ['Amiko', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
