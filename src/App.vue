<template>
  <div mx-auto max-w-1440 p16 flex-col-center pt-200>
    <div>
      <button @click="countStore.decrement()">-</button>
      <span px-16>
        {{ countStore.counter }}
      </span>
      <button @click="countStore.increment()">+</button>
    </div>

    <main py-24>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useCountStore } from '~/store'

const countStore = useCountStore()
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
