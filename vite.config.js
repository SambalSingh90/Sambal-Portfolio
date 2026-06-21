import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: '/Sambal-Portfolio/',
  plugins: [
    tailwindcss(),
  ],
})
