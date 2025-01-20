<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCountStore } from '~/stores/countStore'
import Footer from './components/Footer.vue'

const countStore = useCountStore()
</script>

<template>
  <div class="relative z-0 h-screen bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
    <div
      class="absolute -top-24 right-44 -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"
    />
    <div
      class="absolute -top-4 left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:-left-60 2xl:-left-20 dark:bg-[#433f68]"
    />

    <main class="flex-col-center relative size-full">
      <div class="text-6xl font-bold">
        <span class="relative">
          V
          <sub class="icon-[lucide--cat] absolute -top-1/3 left-2/3 !size-8 rotate-12" />
        </span>
        auch
      </div>

      <section class="mt-14 flex gap-4 py-3">
        <button
          type="button"
          @click="countStore.decrement()"
        >
          <i class="icon-[lucide--minus] size-4" />
        </button>
        <div class="rounded bg-[#f0f0f0]/20 p-1 px-2 font-bold">
          {{ countStore.counter }}
        </div>
        <button
          type="button"
          @click="countStore.increment()"
        >
          <i class="icon-[lucide--plus] size-4" />
        </button>
      </section>

      <section class="flex gap-4 py-3">
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </section>

      <main class="py-6">
        <router-view #default="{ Component }">
          <component :is="Component" />
        </router-view>
      </main>

      <Footer />
    </main>
  </div>
</template>
