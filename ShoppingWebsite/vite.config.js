import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss({
    theme: {
      extend: {
        fontFamily: {
          archivo: ["Archivo", "sans-serif"],
          nunito: ["Nunito", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
          ubuntu: ["Ubuntu", "sans-serif"],
        },
      },
    },
  }),],
})
