<script setup lang="ts">
import { RouterLink } from 'vue-router'

const features = [
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>`,
    title: 'Chất lượng hoàn hảo',
    description: 'Quy trình kiểm soát chất lượng 3 bước. Đảm bảo độ chính xác 99.9%.'
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`,
    title: 'Đa chuyên ngành',
    description: 'Kinh nghiệm trong 22+ ngành nghề từ Y tế, Pháp lý đến CNTT, Tài chính.'
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    title: 'Giá cả cạnh tranh',
    description: 'Báo giá minh bạch, cạnh tranh nhất thị trường. Giảm 10% cho khách hàng thân thiết.'
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
    title: 'Đội ngũ chuyên nghiệp',
    description: 'Hơn 500+ biên dịch viên và phiên dịch viên được đào tạo bài bản.'
  }
]
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tại sao chọn <span class="text-primary">Dịch Thuật Phương Đông?</span>
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Với hơn 12 năm kinh nghiệm, chúng tôi tự hào là đối tác dịch thuật tin cậy của hơn 6000 doanh nghiệp trong và ngoài nước.
          </p>

          <div class="space-y-6">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="flex gap-4"
            >
              <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <div v-html="feature.icon" />
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">{{ feature.title }}</h4>
                <p class="text-gray-600">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <RouterLink to="/ve-chung-toi" class="btn-primary">
              Tìm hiểu thêm
            </RouterLink>
          </div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
            <!-- Placeholder for office image -->
            <div class="w-full h-full flex items-center justify-center text-gray-400">
              <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <!-- Floating card -->
          <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden md:block">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div class="font-bold text-gray-900">12+ năm</div>
                <div class="text-sm text-gray-500">Kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
