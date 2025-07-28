import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: [
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/components", replacement: "/src/components" },
      { find: "@/pages", replacement: "/src/pages" },
      { find: "@/types", replacement: "/src/types" },
      { find: "@/utils", replacement: "/src/utils" },
      { find: "@/hooks", replacement: "/src/hooks" },
      { find: "@/contexts", replacement: "/src/contexts" },
      { find: "@/services", replacement: "/src/services" },
    
  ],
  }
})
