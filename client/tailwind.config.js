/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors:{
        "primary" : "#0A192F",
        "secondary" : "#F97316",
        "tertiary" : "#54D6BB",
        "white": "#fff"
      },
    screens: {
        'sm' : {max : "640"},
        // => @media (min-width: 640px) { ... }
  
        
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        
      }
    
  },
  plugins: [],
}

