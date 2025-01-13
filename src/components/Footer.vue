<script setup lang="ts">
import { toggleDark } from '~/composables/index'
</script>

<template>
  <button
    type="button"
    class="flex-center"
    @click="toggleDark"
  >
    <div class="icon-[lucide--sun] !size-6 dark:icon-[lucide--moon]" />
  </button>
</template>
