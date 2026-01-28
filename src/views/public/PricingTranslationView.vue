<script setup lang="ts">
import { onMounted } from 'vue'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import { usePricingStore } from '@/stores'

const pricingStore = usePricingStore()

onMounted(() => {
  pricingStore.fetchTranslationPricing()
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Báo giá dịch thuật' }]" />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Bảng giá dịch thuật</h1>
        <p class="text-gray-600 mt-2">Bảng giá dịch thuật tài liệu theo ngôn ngữ (VNĐ/trang)</p>
      </div>
    </section>

    <!-- Pricing Info -->
    <section class="section">
      <div class="container">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 class="font-bold text-blue-900 mb-2">Quy cách tính:</h3>
          <p class="text-blue-800">1 trang dịch thuật = 300 từ. Ví dụ: 2100 từ ÷ 300 = 7 trang</p>
        </div>

        <!-- Price Table -->
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-xl shadow-card overflow-hidden">
            <thead class="bg-primary text-white">
              <tr>
                <th class="px-6 py-4 text-left">Ngôn ngữ gốc</th>
                <th class="px-6 py-4 text-left">Dịch sang</th>
                <th class="px-6 py-4 text-right">Giá tiêu chuẩn</th>
                <th class="px-6 py-4 text-right">Giá chuyên ngành</th>
                <th class="px-6 py-4 text-right">Phí công chứng</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr
                v-for="price in pricingStore.translationPricing"
                :key="price.id"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-4 font-medium">{{ price.sourceLanguage }}</td>
                <td class="px-6 py-4">{{ price.targetLanguage }}</td>
                <td class="px-6 py-4 text-right text-primary font-bold">
                  {{ price.standardPrice.toLocaleString() }} đ
                </td>
                <td class="px-6 py-4 text-right text-secondary font-bold">
                  {{ price.specializedPrice.toLocaleString() }} đ
                </td>
                <td class="px-6 py-4 text-right">
                  {{ price.notarizationFee.toLocaleString() }} đ
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Notes -->
        <div class="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 class="font-bold text-gray-900 mb-4">Ghi chú:</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Giá trên chưa bao gồm VAT 10%
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Giảm giá cho khối lượng lớn (trên 50 trang)
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Giảm 5-10% cho khách hàng thân thiết
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Ngôn ngữ hiếm: Liên hệ để báo giá
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-4">Nhận báo giá chi tiết</h2>
        <p class="text-white/80 mb-8">Gửi tài liệu để nhận báo giá chính xác nhất</p>
        <router-link to="/lien-he" class="btn-white inline-block">
          Nhận báo giá ngay
        </router-link>
      </div>
    </section>
  </div>
</template>
