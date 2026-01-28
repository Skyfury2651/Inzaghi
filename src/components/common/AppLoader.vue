<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClasses = {
  sm: 'w-6 h-6 border-2',
  md: 'w-10 h-10 border-3',
  lg: 'w-16 h-16 border-4'
}
</script>

<template>
  <div class="flex items-center justify-center">
    <div
      class="rounded-full border-primary border-t-transparent animate-spin"
      :class="sizeClasses[size]"
    />
  </div>
</template>
