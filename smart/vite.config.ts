import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isWindowsHost = process.env.HOST_OS === 'Windows';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    watch: isWindowsHost ? { usePolling: true } : undefined,
  },
})
