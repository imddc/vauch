<script setup lang="ts">
import { toggleDark } from '~/composables/index'
</script>

<template>
  <button
    type="button"
    class="flex-center"
    @click="toggleDark"
  >
    <div class="icon-[ph--sun] dark:icon-[ph--moon] !size-6" />
  </button>
</template>
