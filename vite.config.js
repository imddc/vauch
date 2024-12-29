/// <reference types="vitest" />
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitest.dev/guide/
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'node',
    open: false,
    api: {
      port: 5173,
    },
  },
})
