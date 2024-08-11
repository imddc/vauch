/// <reference types="vitest" />

import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],

  // https://vitest.dev/guide/
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },

  server: {
    port: 9527,
  },
})
