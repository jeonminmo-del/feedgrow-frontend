import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind v4: PostCSS 방식 사용 (postcss.config.js에서 @tailwindcss/postcss 처리)
export default defineConfig({
  plugins: [
    react(),
  ],
})
