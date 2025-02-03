/// <reference types="vitest" />
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
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
    VueRouter({
      logs: true,
      dts: 'src/types/typed-router.d.ts',
      routesFolder: [
        { src: 'src/pages' },
      ],
    }),
    vue(),
    vueJsx(),
    tailwindcss(),
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
