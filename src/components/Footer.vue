<script setup lang="ts">
import { toggleDark } from '~/composables/index'
</script>

<template>
  <div class="flex gap-4">
    <button
      type="button"
      class="flex-center text-6"
      @click="toggleDark"
    >
      <span class="icon-[carbon--moon] dark:icon-[carbon--sun]" />
    </button>
  </div>
</template>
