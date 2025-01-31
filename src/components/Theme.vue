<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <button
    type="button"
    class="flex-center"
    @click="toggleDark"
  >
    <Icon :icon="!isDark ? 'lucide:sun' : 'lucide:moon'" class="size-6" />
  </button>
</template>
