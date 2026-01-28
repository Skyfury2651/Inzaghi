<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppCard from '@/components/common/AppCard.vue'

const visaServices = [
  {
    slug: 'han-quoc',
    country: 'Hàn Quốc',
    flag: '🇰🇷',
    description: 'Visa công tác, du lịch, du học Hàn Quốc',
    features: ['Hồ sơ chuẩn', 'Xử lý nhanh', 'Tỷ lệ đậu cao']
  },
  {
    slug: 'trung-quoc',
    country: 'Trung Quốc',
    flag: '🇨🇳',
    description: 'Visa công tác, du lịch Trung Quốc',
    features: ['Thủ tục đơn giản', 'Xử lý nhanh chóng', 'Hỗ trợ đặt lịch']
  },
  {
    slug: 'nhat-ban',
    country: 'Nhật Bản',
    flag: '🇯🇵',
    description: 'Visa công tác, du lịch, du học Nhật Bản',
    features: ['Tư vấn chuyên nghiệp', 'Hồ sơ chuẩn xác', 'Hỗ trợ phỏng vấn']
  },
  {
    slug: 'an-do',
    country: 'Ấn Độ',
    flag: '🇮🇳',
    description: 'Visa công tác, du lịch Ấn Độ',
    features: ['Xử lý online', 'Thủ tục nhanh', 'Chi phí hợp lý']
  },
  {
    slug: 'uc',
    country: 'Úc',
    flag: '🇦🇺',
    description: 'Visa công tác, du lịch, du học Úc',
    features: ['Tư vấn chuyên sâu', 'Hỗ trợ toàn diện', 'Tỷ lệ thành công cao']
  }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Visa' }]" class="mb-6 text-white/70" />
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Dịch vụ Visa</h1>
        <p class="text-lg text-white/80 max-w-2xl">
          Hỗ trợ làm visa Hàn Quốc, Trung Quốc, Nhật Bản, Ấn Độ, Úc với thủ tục nhanh chóng, tỷ lệ đậu cao
        </p>
      </div>
    </section>

    <!-- Visa Services -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Các loại Visa chúng tôi hỗ trợ</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <RouterLink
            v-for="visa in visaServices"
            :key="visa.slug"
            :to="`/visa/${visa.slug}`"
            class="group"
          >
            <AppCard hoverable padding="lg">
              <div class="flex items-start gap-4">
                <div class="text-5xl">{{ visa.flag }}</div>
                <div class="flex-1">
                  <h3 class="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">
                    {{ visa.country }}
                  </h3>
                  <p class="text-gray-600 mt-1">{{ visa.description }}</p>
                  <ul class="mt-3 space-y-1">
                    <li
                      v-for="feature in visa.features"
                      :key="feature"
                      class="text-sm text-gray-500 flex items-center gap-2"
                    >
                      <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {{ feature }}
                    </li>
                  </ul>
                </div>
              </div>
            </AppCard>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Quy trình làm Visa</h2>
        <div class="max-w-4xl mx-auto mt-12">
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 class="font-bold text-gray-900 mb-2">Tư vấn</h3>
              <p class="text-gray-600 text-sm">Tư vấn loại visa phù hợp và hồ sơ cần thiết</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 class="font-bold text-gray-900 mb-2">Chuẩn bị</h3>
              <p class="text-gray-600 text-sm">Hướng dẫn chuẩn bị hồ sơ hoàn chỉnh</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 class="font-bold text-gray-900 mb-2">Nộp hồ sơ</h3>
              <p class="text-gray-600 text-sm">Nộp hồ sơ và theo dõi tiến trình</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
              <h3 class="font-bold text-gray-900 mb-2">Nhận kết quả</h3>
              <p class="text-gray-600 text-sm">Nhận visa và tư vấn thêm nếu cần</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-4">Cần làm visa?</h2>
        <p class="text-white/80 mb-8">Liên hệ ngay để được tư vấn miễn phí</p>
        <router-link to="/lien-he" class="btn-white inline-block">
          Liên hệ ngay
        </router-link>
      </div>
    </section>
  </div>
</template>
