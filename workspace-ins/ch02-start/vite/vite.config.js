import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b2d0675 (✨ vite counter 실습)
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@hooks", replacement: "/src/hooks" },
    ],
  },
<<<<<<< HEAD
=======
>>>>>>> fa8a6cd (✨)
=======
>>>>>>> b2d0675 (✨ vite counter 실습)
})
