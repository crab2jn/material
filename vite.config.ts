import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键配置：设置为您的 GitHub 仓库名称 /material/
  // 这样打包后的 index.html 会引用 /material/assets/xxx.js 而不是 /assets/xxx.js
  base: '/material/',
  build: {
    outDir: 'dist',
  }
});