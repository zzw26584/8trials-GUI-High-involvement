
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 如果你没有安装 @vitejs/plugin-react，可以先移除 plugins 数组
  // 但标准的 React + Vite 项目建议包含它
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // 确保构建时不会因为一些细微的 TS 警告而中断
    reportCompressedSize: false,
  },
});
