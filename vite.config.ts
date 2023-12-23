/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),
  ],

  //https://vitest.dev/guide/
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },

  server: {
    port: 9527,
  },
})
