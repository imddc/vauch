<script setup lang="ts">
const countStore = useCountStore()
</script>

<template>
  <div mx-auto h-full max-w-1440 p16 flex-col-center pt-200>
    <section py-12>
      <button btn @click="countStore.decrement()">-</button>

      <span text-center px-16 min-w-50>
        {{ countStore.counter }}
      </span>
      <button btn @click="countStore.increment()">+</button>
    </section>

    <section flex gap-26 mt-28 py-12>
      <router-link to="/"> Home </router-link>
      <router-link to="/about"> About </router-link>
    </section>

    <main py-24>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
