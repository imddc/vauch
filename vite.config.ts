/// <reference types="vitest" />

import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`
    }
  },

  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables'],
      vueTemplate: true
    }),
    Components({
      extensions: ['vue'],
      dirs: ['src/components'],
      dts: 'src/components.d.ts'
    }),

    UnoCSS(),
    VueDevTools()
  ],

  // https://vitest.dev/guide/
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom'
  },

  server: {
    port: 9527
  }
})
