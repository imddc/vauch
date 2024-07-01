<script setup lang="ts">
import { toggleDark } from '~/composables/index'
</script>

<template>
  <button
    type="button"
    class="flex-center"
    @click="toggleDark"
  >
    <div class="icon-[lucide--sun] dark:icon-[lucide--moon] !size-6" />
  </button>
</template>
