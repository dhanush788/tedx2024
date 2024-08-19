/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        thunder: ['Thunder', 'sans'],
        avenue: ['AvenueX', 'sans'],
        Helvetica: ['HelveticaBold', 'sans'],
        HelveticaLight: ['HelveticaLight', 'sans'],
        Geist: ['Geist', 'sans'],
      },
			backgroundColor: {
				tedRed: '#EB0028'
			},
			borderRadius: {
				15: "15px"
			},
			textColor: {
				tedRed: '#EB0028'
			},
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards 2s',
      },
    },
    backgroundImage: {
      "pattern" : "url('/pattern.png')",
    }
  },
  plugins: [],
};
