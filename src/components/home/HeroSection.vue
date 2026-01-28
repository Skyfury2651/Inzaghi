<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSettingsStore } from '@/stores'
import AppButton from '@/components/common/AppButton.vue'

const settingsStore = useSettingsStore()
const settings = computed(() => settingsStore.settings)
</script>

<template>
  <section class="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 md:py-32 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full translate-x-1/3 translate-y-1/3" />
    </div>

    <div class="container relative">
      <div class="max-w-3xl">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span class="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span class="text-sm font-medium">DỊCH VỤ DỊCH THUẬT 2026</span>
        </div>

        <!-- Heading -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Giúp doanh nghiệp
          <span class="text-accent">đi trước nhanh hơn</span>
          trên thị trường toàn cầu
        </h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
          Dịch thuật chuyên nghiệp hơn 50 ngôn ngữ. Phiên dịch hội nghị, hội thảo, đàm phán.
          Hơn 12 năm kinh nghiệm phục vụ 6000+ khách hàng.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4">
          <AppButton variant="white" size="lg" to="/lien-he">
            Nhận báo giá
          </AppButton>
          <AppButton variant="outline" size="lg" class="!border-white !text-white hover:!bg-white hover:!text-primary" to="/dich-thuat">
            Xem dịch vụ
          </AppButton>
          <a :href="`tel:${settings.phones[0]}`" class="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {{ settings.phones[0] }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
