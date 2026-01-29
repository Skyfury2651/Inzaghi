<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import { useSettingsStore } from '@/stores'

const settingsStore = useSettingsStore()

// Group languages alphabetically
const groupedLanguages = computed(() => {
  const languages = settingsStore.languages
  const groups: Record<string, typeof languages> = {}

  languages.forEach(lang => {
    const firstLetter = (lang.nameVi?.[0] || '#').toUpperCase()
    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(lang)
  })

  return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]))
})

const letters = computed(() => groupedLanguages.value.map(([letter]) => letter))
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Ngôn ngữ' }]" class="mb-6 text-white/70" />
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hơn 50+ ngôn ngữ</h1>
        <p class="text-lg text-white/80 max-w-2xl">
          Chúng tôi cung cấp dịch vụ dịch thuật và phiên dịch cho hơn 50 ngôn ngữ trên toàn thế giới
        </p>
      </div>
    </section>

    <!-- Alphabet Navigation -->
    <section class="section">
      <div class="container">
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <a
            v-for="letter in letters"
            :key="letter"
            :href="`#letter-${letter}`"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold hover:bg-primary-dark transition-colors"
          >
            {{ letter }}
          </a>
        </div>

        <!-- Language Grid -->
        <div
          v-for="([letter, langs], index) in groupedLanguages"
          :key="letter"
          :id="`letter-${letter}`"
          class="mb-16"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl">
              {{ letter }}
            </span>
            Ngôn ngữ bắt đầu bằng {{ letter }}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink
              v-for="lang in langs"
              :key="lang.code"
              :to="lang.translationUrl"
              class="bg-white rounded-xl p-4 shadow-card hover:shadow-dropdown hover:-translate-y-1 transition-all group"
            >
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {{ lang.code.toUpperCase() }}
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {{ lang.nameVi }}
                  </h3>
                  <p class="text-sm text-gray-500">{{ lang.name }}</p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- Back to Top -->
        <div class="text-center">
          <a href="#" class="btn-outline">
            Về đầu trang
          </a>
        </div>
      </div>
    </section>

    <!-- Services Info -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Dịch vụ của chúng tôi</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-12">
          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Dịch thuật tài liệu</h3>
            <p class="text-gray-600">Dịch thuật tài liệu chuyên nghiệp cho mọi lĩnh vực: kỹ thuật, pháp lý, y tế, tài chính, marketing và nhiều hơn nữa.</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Phiên dịch</h3>
            <p class="text-gray-600">Dịch vụ phiên dịch hội nghị, hội thảo, đàm phán thương mại, cabin và nhiều hình thức phiên dịch khác.</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Dịch Website/App</h3>
            <p class="text-gray-600">Bản địa hóa website và ứng dụng di động để mở rộng thị trường quốc tế.</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Dịch Video/Subtitle</h3>
            <p class="text-gray-600">Dịch và chèn phụ đề cho video, phim, giáo trình và các nội dung đa phương tiện khác.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-4">Không tìm thấy ngôn ngữ bạn cần?</h2>
        <p class="text-white/80 mb-8">Liên hệ ngay để được tư vấn về ngôn ngữ và dịch vụ phù hợp</p>
        <router-link to="/lien-he" class="btn-white inline-block">
          Liên hệ ngay
        </router-link>
      </div>
    </section>
  </div>
</template>
