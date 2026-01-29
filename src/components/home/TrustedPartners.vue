<script setup lang="ts">
// TODO: Replace these images with local assets later
// Using direct URLs from original site for now
const partners = [
  {
    name: 'Panasonic',
    logo: 'https://dichthuatphuongdong.com/wp-content/themes/landing/assets/images/partner/panasonic-min.png'
  },
  {
    name: 'Yamaha',
    logo: 'https://dichthuatphuongdong.com/wp-content/themes/landing/assets/images/partner/yamaha-min.png'
  },
  {
    name: 'Inoac',
    logo: 'https://dichthuatphuongdong.com/wp-content/themes/landing/assets/images/partner/inoac-min.png'
  },
  {
    name: 'Samsung',
    logo: 'https://dichthuatphuongdong.com/wp-content/themes/landing/assets/images/partner/samsung-min.png'
  },
  {
    name: 'FPT',
    logo: 'https://dichthuatphuongdong.com/wp-content/themes/landing/assets/images/partner/fpt-min.png'
  },
  {
    name: 'Viettel',
    logo: 'https://dichthuatphuongdong.com/wp-content/themes/landing/assets/images/partner/viettel-min.png'
  }
]
</script>

<template>
  <section class="py-12 bg-gray-50">
    <div class="container">
      <p class="text-center text-gray-500 mb-8">Đối tác Tin cậy của:</p>
      <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
        >
          <!-- TODO: Replace with local images -->
          <img :src="partner.logo" :alt="partner.name" class="h-8 md:h-12 w-auto object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>
