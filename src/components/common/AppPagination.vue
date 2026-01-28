<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
  maxVisible?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxVisible: 5
})

const emit = defineEmits<{
  'update:currentPage': [page: number]
}>()

const pages = computed(() => {
  const total = props.totalPages
  const current = props.currentPage
  const max = props.maxVisible

  if (total <= max) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const half = Math.floor(max / 2)
  let start = current - half
  let end = current + half

  if (start < 1) {
    start = 1
    end = max
  }

  if (end > total) {
    end = total
    start = total - max + 1
  }

  const result: (number | string)[] = []

  if (start > 1) {
    result.push(1)
    if (start > 2) result.push('...')
  }

  for (let i = start; i <= end; i++) {
    result.push(i)
  }

  if (end < total) {
    if (end < total - 1) result.push('...')
    result.push(total)
  }

  return result
})

function goToPage(page: number) {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('update:currentPage', page)
  }
}
</script>

<template>
  <nav v-if="totalPages > 1" class="flex items-center justify-center gap-2">
    <!-- Previous -->
    <button
      :disabled="currentPage === 1"
      class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      @click="goToPage(currentPage - 1)"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Pages -->
    <template v-for="page in pages" :key="page">
      <span v-if="page === '...'" class="px-2 text-gray-400">...</span>
      <button
        v-else
        class="w-10 h-10 flex items-center justify-center rounded-full font-medium transition-colors"
        :class="page === currentPage
          ? 'bg-primary text-white'
          : 'border border-gray-300 hover:border-primary hover:text-primary'"
        @click="goToPage(page as number)"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next -->
    <button
      :disabled="currentPage === totalPages"
      class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      @click="goToPage(currentPage + 1)"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </nav>
</template>
