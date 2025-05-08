/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}", "./public/index.html"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "black-300": "#1C1C21",
      "white-100": "#f3f3f3",
      "white-500": "#62646C",
      p1: '#2EF2FF',
      p2: '#3C52D9',
      p3: '#C8EA80',
      p4: '#EAEDFF',
      p5: '#C4CBF5',
      s1: '#151030',
      s2: '#0C1838',
      s3: '#334679',
      s4: '#1959AD',
      s5: '#263466',
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
  },
};
export const plugins = [];