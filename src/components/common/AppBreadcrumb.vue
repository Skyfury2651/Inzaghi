<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

interface BreadcrumbItem {
  label: string
  to?: string
}

interface Props {
  items?: BreadcrumbItem[]
  showHome?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  showHome: true
})

const route = useRoute()

const breadcrumbs = computed(() => {
  const crumbs: BreadcrumbItem[] = []

  if (props.showHome) {
    crumbs.push({ label: 'Trang chủ', to: '/' })
  }

  crumbs.push(...props.items)

  return crumbs
})
</script>

<template>
  <nav class="flex items-center gap-2 text-sm text-gray-500">
    <template v-for="(item, index) in breadcrumbs" :key="index">
      <RouterLink
        v-if="item.to && index < breadcrumbs.length - 1"
        :to="item.to"
        class="hover:text-primary transition-colors"
      >
        {{ item.label }}
      </RouterLink>
      <span v-else class="text-gray-800 font-medium">
        {{ item.label }}
      </span>
      <svg
        v-if="index < breadcrumbs.length - 1"
        class="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </template>
  </nav>
</template>
