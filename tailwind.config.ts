module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93c5fd', // Lighter shade
          DEFAULT: '#3b82f6', // Default shade
          dark: '#1d4ed8', // Darker shade
        },
        secondary: {
          light: '#fde68a', // Light yellow
          DEFAULT: '#f59e0b', // Default amber
          dark: '#b45309', // Darker amber
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Make sure the font is loaded
      },
    },
  },
  plugins: [],
};
