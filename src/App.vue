<template>
  <div>
    <div>
      <button @click="countStore.decrement()">-</button>
      <span px-16>
        {{ countStore.counter }}
      </span>
      <button @click="countStore.increment()">+</button>
    </div>

    <main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useCountStore } from '~/store'

const countStore = useCountStore()

useHead({
  title: 'Vue 3 + Vite + TypeScript  + Pinia + Vue Router',
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
