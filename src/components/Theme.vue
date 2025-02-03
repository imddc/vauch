<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useDark } from '@vueuse/core'
import { toggleDark } from '~/utils/toggleDark'

const isDark = useDark()
</script>

<template>
  <button type="button" class="flex-center" @click="toggleDark">
    <Icon :icon="!isDark ? 'lucide:sun' : 'lucide:moon'" class="size-6" />
  </button>
</template>
