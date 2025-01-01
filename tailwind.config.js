/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
      colors:{
        black:{
          DEFAULT:'#000000',
          100:'#1C1D22',
          90:'#2C2D33',
          80:'#33343A',
          70:'#37393F',
          60:'#45464E',
          50:'#53545C',
          40:'#6E7079',
          30:'#8B8D97',
          20:'#A6A8B1',
          10:'#BEC0CA',
        },
        primary:{          
          100:'#5570F1',
          90:'#6078EC',
          80:'#6D83EC',
          70:'#7C8FEC',
          60:'#8899E9',
          50:'#97A5EB',
          40:'#ABB5E9',
          30:'#B6BFE8',
          20:'#C4CAE8',
          10:'#DBDEEE',
        },
        secondary:{          
          100:'#FFCC91',
          90:'#FFD29E',
          80:'#FFDAAE',
          70:'#FFDFBA',
          60:'#FFE5C8',
          50:'#FFEAD1',
          40:'#FFF0DE',
          30:'#FFF2E2',
          20:'#FEF5EA',
          10:'#FEF9F2',
        },
        red:'#CC5F5F',
        green:'#519C66',
        grey:'#E1E2E9',
        mainbg:'#F4F5FA',
        stroke:'#F1F3F9',
      }
    }
  },
  plugins: []
};