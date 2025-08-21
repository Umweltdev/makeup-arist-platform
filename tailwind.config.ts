import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}" // add your TS/TSX files
  ],
  theme: {
    extend: {
      colors: {
        green:{
          1000:"#3F6C54",
      900:"#527B62",
      800:"#668974",
      700:"#799885",
      600:"#8CA797",
      500:"#9FB6A8",
      400:"#B2C4B9",
      300:"#C5D3CB",
      200:"#D9E2DC",
      100:"#ECF0EE",
        },
        
      beaver:{
        800:"#B6917A",
        700:"#BD9C87",
        600:"#CCB2A2",
        500:"#bd9c87",
        400:"#CCB2A2",
        300:"#DBC8BC",
        200:"#E9DEd8",
        100:"#f8f4f2"
      }
      
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mitchaella: ["Mitchaella", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
