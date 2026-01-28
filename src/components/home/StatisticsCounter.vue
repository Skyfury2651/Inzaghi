<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const stats = [
  { value: 6000, suffix: '+', label: 'Khách hàng', color: 'text-primary' },
  { value: 25000, suffix: '+', label: 'Tài liệu dịch', color: 'text-secondary' },
  { value: 4500, suffix: '+', label: 'Phiên dịch', color: 'text-accent' },
  { value: 12, suffix: '+', label: 'Năm kinh nghiệm', color: 'text-green-600' }
]

const containerRef = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)
const animatedValues = ref(stats.map(() => 0))

function animateValue(index: number, endValue: number) {
  const duration = 2000
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic

    animatedValues.value[index] = Math.floor(eased * endValue)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

const { stop } = useIntersectionObserver(
  containerRef,
  (entries) => {
    const entry = entries[0]
    if (entry && entry.isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      stats.forEach((stat, index) => {
        setTimeout(() => animateValue(index, stat.value), index * 100)
      })
      stop()
    }
  },
  { threshold: 0.3 }
)
</script>

<template>
  <section ref="containerRef" class="py-16 bg-gray-900 text-white">
    <div class="container">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-4xl md:text-5xl font-bold mb-2" :class="stat.color">
            {{ (animatedValues[index] ?? 0).toLocaleString() }}{{ stat.suffix }}
          </div>
          <div class="text-gray-400">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
