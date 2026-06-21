import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/sambal-portfolio/',
  plugins: [
    tailwindcss(),
  ],
})
