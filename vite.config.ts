
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // 加载环境变量，第 3 个参数 '' 表示加载所有以 VITE_ 开头以及系统级的变量
  // Fix: Use '.' instead of process.cwd() to resolve the TypeScript error 'Property cwd does not exist on type Process'.
  const env = loadEnv(mode, '.', '');
  
  return {
    define: {
      // 确保从 Vercel 系统环境变量中读取 API_KEY 并注入代码
      // 如果没有设置，默认为空字符串以防止 JSON.stringify(undefined) 报错
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
