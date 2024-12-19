/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   
      animation: {
        slideIn: 'slideIn 1s ease-out',
        slideleft: 'slideleft 1s ease-out',
        slidetop: 'slidetop 1s ease-out',
        slideright:'slideright 1s ease-out',
        slidetopDelay1: 'slidetop 1s ease-out 0.2s',
        slidetopDelay2: 'slidetop 1s ease-out 0.4s',
        slidetopDelay3: 'slidetop 1s ease-out 0.6s',
        slidetopDelay4: 'slidetop 1s ease-out 0.8s',
        slideInDelay1: 'slideIn 1s ease-out 0.2s',
        slideInDelay2: 'slideIn 1s ease-out 0.4s',
        slideInDelay3: 'slideIn 1s ease-out 0.6s',
        slideInDelay4: 'slideIn 1s ease-out 0.8s',
      },
      keyframes: {
       
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideleft: {
          '0%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slidetop: {
          '0%': { transform: 'translateY(-200px)' },
          '100%': { transform: 'translateY(0)' },
        },
       
        plugins: [],
      }
    }
   
 
}
  }



  