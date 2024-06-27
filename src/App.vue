<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Footer from './components/Footer.vue'
import { useCountStore } from '~/stores/countStore'

const countStore = useCountStore()
</script>

<template>
  <div class="mx-auto h-full max-w-1440 p16 flex-col-center pt-200">
    <section class="py-3">
      <button
        type="button"
        @click="countStore.decrement()"
      >
        -
      </button>
      <span>
        {{ countStore.counter }}
      </span>
      <button
        type="button"
        @click="countStore.increment()"
      >
        +
      </button>
    </section>

    <section class="flex gap-4 mt-7 py-3">
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
  </div>
</template>
