<script setup lang="ts">
const partners = [
  { name: 'Panasonic', logo: '/images/partners/panasonic.png' },
  { name: 'Yamaha', logo: '/images/partners/yamaha.png' },
  { name: 'Samsung', logo: '/images/partners/samsung.png' },
  { name: 'FPT', logo: '/images/partners/fpt.png' },
  { name: 'Viettel', logo: '/images/partners/viettel.png' },
  { name: 'Inoac', logo: '/images/partners/inoac.png' }
]
</script>

<template>
  <section class="py-12 bg-gray-50">
    <div class="container">
      <p class="text-center text-gray-500 mb-8">Được tin tưởng bởi hơn 6000+ doanh nghiệp</p>
      <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
        >
          <!-- Placeholder for partner logos -->
          <div class="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm font-medium">
            {{ partner.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
