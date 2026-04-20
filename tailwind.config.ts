import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          50: "#fdf8f0",
          100: "#f9edd8",
          200: "#f2d7ac",
          300: "#e9bc78",
          400: "#df9a44",
          500: "#d68028",
          600: "#c7661e",
          700: "#a54d1b",
          800: "#863e1d",
          900: "#6d341b",
          950: "#3b190c",
        },
        cream: {
          50: "#fffef9",
          100: "#fefcf0",
          200: "#fdf7de",
          300: "#faf0c4",
          400: "#f5e49a",
          500: "#f0d56e",
          600: "#e4bb3c",
          700: "#c99a26",
          800: "#a67a22",
          900: "#88641f",
          950: "#4a350e",
        },
        gold: {
          50: "#fdfbe9",
          100: "#fcf6c6",
          200: "#f9ea90",
          300: "#f5d750",
          400: "#f0c324",
          500: "#e0ab11",
          600: "#c1840c",
          700: "#9a5f0d",
          800: "#7f4b13",
          900: "#6c3e16",
          950: "#3f1f08",
        },
        dark: {
          50: "#f6f5f0",
          100: "#e8e5db",
          200: "#d3cdb9",
          300: "#baaf91",
          400: "#a59672",
          500: "#968564",
          600: "#806e55",
          700: "#685846",
          800: "#584a3d",
          900: "#4d4137",
          950: "#1a1510",
        },
      },
      fontFamily: {
        display: ["'Syne'", "system-ui", "sans-serif"],
        serif: ["'Alice'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(214, 128, 40, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(214, 128, 40, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
