<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSettingsStore } from '@/stores'

const settingsStore = useSettingsStore()
const languages = computed(() => settingsStore.languages.slice(0, 12))
</script>

<template>
  <section class="section bg-gray-50">
    <div class="container">
      <h2 class="section-title">Hỗ trợ hơn 50+ ngôn ngữ</h2>
      <p class="section-subtitle">
        Đội ngũ biên dịch viên và phiên dịch viên chuyên nghiệp, giàu kinh nghiệm
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <RouterLink
          v-for="lang in languages"
          :key="lang.code"
          :to="lang.translationUrl"
          class="group bg-white rounded-xl p-4 border-2 border-transparent hover:border-primary shadow-sm hover:shadow-md transition-all text-center"
        >
          <!-- Flag placeholder -->
          <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            {{ lang.code.toUpperCase() }}
          </div>
          <div class="font-medium text-gray-800 group-hover:text-primary transition-colors">
            {{ lang.nameVi }}
          </div>
        </RouterLink>
      </div>

      <div class="text-center mt-8">
        <RouterLink to="/ngon-ngu-dich" class="btn-outline">
          Xem tất cả ngôn ngữ
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
