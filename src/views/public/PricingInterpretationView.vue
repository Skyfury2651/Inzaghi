<script setup lang="ts">
import { onMounted } from 'vue'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import { usePricingStore } from '@/stores'

const pricingStore = usePricingStore()

onMounted(() => {
  pricingStore.fetchInterpretationPricing()
})

const levels = [
  { key: 'level1', title: 'Cấp 1 - Cơ bản', description: 'Du lịch, gặp mặt thông thường, khám bệnh' },
  { key: 'level2', title: 'Cấp 2 - Trung cấp', description: 'Công việc thực địa, tháp tùng, hội thảo nhỏ' },
  { key: 'level3', title: 'Cấp 3 - Cao cấp', description: 'Cabin, hội nghị lớn, đàm phán cấp cao' }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Báo giá phiên dịch' }]" />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Bảng giá phiên dịch</h1>
        <p class="text-gray-600 mt-2">Bảng giá phiên dịch theo ngôn ngữ và cấp độ (USD/ngày 8 giờ)</p>
      </div>
    </section>

    <!-- Level Explanation -->
    <section class="section">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div
            v-for="level in levels"
            :key="level.key"
            class="bg-white rounded-xl p-6 shadow-card border-t-4"
            :class="{
              'border-green-500': level.key === 'level1',
              'border-blue-500': level.key === 'level2',
              'border-purple-500': level.key === 'level3'
            }"
          >
            <h3 class="font-bold text-gray-900 mb-2">{{ level.title }}</h3>
            <p class="text-gray-600 text-sm">{{ level.description }}</p>
          </div>
        </div>

        <!-- Price Table -->
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-xl shadow-card overflow-hidden">
            <thead class="bg-primary text-white">
              <tr>
                <th class="px-6 py-4 text-left">Ngôn ngữ</th>
                <th class="px-6 py-4 text-center">Cấp 1</th>
                <th class="px-6 py-4 text-center">Cấp 2</th>
                <th class="px-6 py-4 text-center">Cấp 3</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr
                v-for="price in pricingStore.interpretationPricing"
                :key="price.id"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-4 font-medium">{{ price.language }}</td>
                <td class="px-6 py-4 text-center text-green-600 font-bold">
                  ${{ price.level1.min }} - ${{ price.level1.max }}
                </td>
                <td class="px-6 py-4 text-center text-blue-600 font-bold">
                  ${{ price.level2.min }} - ${{ price.level2.max }}
                </td>
                <td class="px-6 py-4 text-center text-purple-600 font-bold">
                  ${{ price.level3.min }} - ${{ price.level3.max }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Notes -->
        <div class="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 class="font-bold text-gray-900 mb-4">Điều khoản:</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Giá chưa bao gồm VAT 10%
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Ngày làm việc tiêu chuẩn: 8 giờ, làm thêm giờ tính 1.5x
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Chi phí đi lại, ăn ở do khách hàng chi trả (nếu có)
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Giá áp dụng tại Hà Nội, Đà Nẵng, TP.HCM
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-4">Cần phiên dịch viên?</h2>
        <p class="text-white/80 mb-8">Liên hệ ngay để được tư vấn và báo giá chi tiết</p>
        <router-link to="/lien-he" class="btn-white inline-block">
          Liên hệ ngay
        </router-link>
      </div>
    </section>
  </div>
</template>
