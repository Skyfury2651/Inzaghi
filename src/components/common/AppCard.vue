<script setup lang="ts">
interface Props {
  hoverable?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  hoverable: false,
  padding: 'md'
})

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-card overflow-hidden"
    :class="[
      paddingClasses[padding],
      hoverable && 'hover:shadow-dropdown hover:-translate-y-1 transition-all duration-300 cursor-pointer'
    ]"
  >
    <slot />
  </div>
</template>
