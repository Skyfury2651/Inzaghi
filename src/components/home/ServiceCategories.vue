<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppCard from '@/components/common/AppCard.vue'

const categories = [
  {
    title: 'Tài liệu doanh nghiệp',
    description: 'Hợp đồng, báo cáo tài chính, hồ sơ thầu, điều lệ công ty, hóa đơn, chứng từ kế toán...',
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
    to: '/dich-thuat',
    color: 'primary'
  },
  {
    title: 'Tài liệu Marketing',
    description: 'Website, Game, App, Video/Subtitle, Brochure, Catalogue, Hồ sơ năng lực...',
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>`,
    to: '/dich-thuat',
    color: 'secondary'
  },
  {
    title: 'Phiên dịch',
    description: 'Hội nghị, hội thảo, đàm phán, cabin, tháp tùng, chuyển giao công nghệ, online...',
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>`,
    to: '/phien-dich',
    color: 'accent'
  }
]

const colorClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent'
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">Dịch vụ của chúng tôi</h2>
      <p class="section-subtitle">
        Cung cấp đầy đủ các dịch vụ dịch thuật và phiên dịch chuyên nghiệp cho mọi nhu cầu
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RouterLink
          v-for="category in categories"
          :key="category.title"
          :to="category.to"
          class="group"
        >
          <AppCard hoverable padding="lg">
            <div
              class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
              :class="colorClasses[category.color as keyof typeof colorClasses]"
            >
              <div v-html="category.icon" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
              {{ category.title }}
            </h3>
            <p class="text-gray-600">
              {{ category.description }}
            </p>
            <div class="mt-4 text-primary font-medium flex items-center gap-2">
              Xem chi tiết
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </AppCard>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
