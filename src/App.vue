<template>
  <div mx-auto max-w-1440 p16 flex-col-center pt-200>
    <div>
      <img class="logo" src="/vite.svg" alt="Vue logo" width="200" height="200" />
    </div>

    <main py-24>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

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
~/stores
