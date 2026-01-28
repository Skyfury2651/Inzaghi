<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppButton from '@/components/common/AppButton.vue'

const route = useRoute()
const slug = route.params.slug as string

// Mock service data
const service = {
  title: 'Dịch Website chuyên nghiệp',
  description: 'Dịch thuật website đa ngôn ngữ, giúp doanh nghiệp mở rộng thị trường quốc tế',
  benefits: [
    { icon: '💰', title: 'Tiết kiệm chi phí', description: 'Giá cạnh tranh, không phát sinh chi phí ẩn' },
    { icon: '✅', title: 'Chất lượng đảm bảo', description: 'Kiểm duyệt 3 bước, độ chính xác 99.9%' },
    { icon: '🚀', title: 'Tối ưu SEO', description: 'Dịch thuật thân thiện với công cụ tìm kiếm' },
    { icon: '🌍', title: 'Bản địa hóa', description: 'Điều chỉnh nội dung phù hợp văn hóa địa phương' }
  ],
  process: [
    { number: 1, title: 'Nhận yêu cầu', description: 'Tiếp nhận và phân tích yêu cầu của khách hàng' },
    { number: 2, title: 'Báo giá', description: 'Đánh giá khối lượng và báo giá chi tiết' },
    { number: 3, title: 'Dịch thuật', description: 'Biên dịch viên chuyên ngành thực hiện dịch' },
    { number: 4, title: 'Hiệu đính', description: 'Kiểm tra, hiệu đính và đảm bảo chất lượng' },
    { number: 5, title: 'Bàn giao', description: 'Bàn giao sản phẩm và hỗ trợ sau dịch vụ' }
  ],
  faqs: [
    { question: 'Thời gian dịch website mất bao lâu?', answer: 'Tùy thuộc vào khối lượng và độ phức tạp, thông thường từ 3-7 ngày làm việc.' },
    { question: 'Có hỗ trợ dịch website sang nhiều ngôn ngữ không?', answer: 'Có, chúng tôi hỗ trợ dịch website sang hơn 50 ngôn ngữ khác nhau.' },
    { question: 'Chi phí dịch website được tính như thế nào?', answer: 'Chi phí được tính dựa trên số từ, cặp ngôn ngữ và mức độ chuyên ngành.' }
  ]
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16">
      <div class="container">
        <AppBreadcrumb
          :items="[
            { label: 'Dịch thuật', to: '/dich-thuat' },
            { label: service.title }
          ]"
          class="mb-6 text-white/70"
        />
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{{ service.title }}</h1>
        <p class="text-lg text-white/80 max-w-2xl mb-8">{{ service.description }}</p>
        <div class="flex flex-wrap gap-4">
          <AppButton variant="white" size="lg" to="/lien-he">
            Liên hệ dịch vụ
          </AppButton>
          <AppButton variant="outline" size="lg" class="!border-white !text-white hover:!bg-white hover:!text-primary">
            Nhận báo giá
          </AppButton>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Lợi ích khi sử dụng dịch vụ</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div
            v-for="benefit in service.benefits"
            :key="benefit.title"
            class="bg-white rounded-xl p-6 shadow-card text-center"
          >
            <div class="text-4xl mb-4">{{ benefit.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Quy trình làm việc</h2>
        <div class="max-w-4xl mx-auto mt-12">
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div class="space-y-8">
              <div
                v-for="step in service.process"
                :key="step.number"
                class="flex gap-6 items-start"
              >
                <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10">
                  {{ step.number }}
                </div>
                <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                  <h3 class="font-bold text-gray-900 mb-2">{{ step.title }}</h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Câu hỏi thường gặp</h2>
        <div class="max-w-3xl mx-auto mt-12 space-y-4">
          <details
            v-for="(faq, index) in service.faqs"
            :key="index"
            class="bg-white rounded-xl shadow-card group"
          >
            <summary class="p-6 cursor-pointer font-bold text-gray-900 flex items-center justify-between list-none">
              {{ faq.question }}
              <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-600">
              {{ faq.answer }}
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-4">Bạn cần dịch thuật?</h2>
        <p class="text-white/80 mb-8">Liên hệ ngay để nhận tư vấn và báo giá miễn phí</p>
        <AppButton variant="white" size="lg" to="/lien-he">
          Liên hệ ngay
        </AppButton>
      </div>
    </section>
  </div>
</template>
