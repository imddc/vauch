<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCountStore } from '~/stores/countStore'
import Footer from './components/Footer.vue'

const countStore = useCountStore()
</script>

<template>
  <div class="size-full bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 z-0">
    <div
      class="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"
    />
    <div
      class="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#433f68]"
    />

    <main class="flex-col-center size-full relative">
      <div class="text-6xl font-bold">
        <span class="relative">
          V
          <sub class="absolute -top-1/3 left-2/3 icon-[lucide--cat] !size-8 rotate-12" />
        </span>
        auch
      </div>

      <section class="py-3 flex gap-4 mt-14">
        <button
          type="button"
          @click="countStore.decrement()"
        >
          <i class="icon-[lucide--minus] size-4" />
        </button>
        <div class="text-6 font-bold bg-[#f0f0f0]/20 p-1 px-2 rounded">
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
