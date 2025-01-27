import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/Yvonnezhang924/yvonnezhang924.github.io", // 设置 base 为根路径，因为这是 GitHub Pages 用户/组织页面
})
