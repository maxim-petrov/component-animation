import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  }
  
  if (command !== 'serve') {
    // Для продакшен-сборки используем базовый путь GitHub Pages
    config.base = '/component-animation/'
  }
  
  return config
})
