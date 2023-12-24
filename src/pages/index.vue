<template>
  <div>
    <button btn @click="countStore.decrement()">-</button>
    <span px-16>
      {{ countStore.counter }}
    </span>
    <button btn @click="countStore.increment()">+</button>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Vue 3 + Vite + TypeScript  + Pinia + Vue Router',
})

const countStore = useCountStore()
</script>

<style scoped lang="scss"></style>
