/// <reference types="vitest" />

import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
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
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts'
    }),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        '@vueuse/core',
        '@vueuse/head',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink', 'createRouter', 'createWebHistory'],
          '@vueuse/head': ['createHead']
        }
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
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
