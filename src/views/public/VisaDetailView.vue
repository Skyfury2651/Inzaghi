<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppButton from '@/components/common/AppButton.vue'

const route = useRoute()
const slug = route.params.slug as string

const visaData: Record<string, { country: string; flag: string; processingTime: string; fee: string }> = {
  'han-quoc': { country: 'Hàn Quốc', flag: '🇰🇷', processingTime: '5-7 ngày', fee: 'Từ 2.000.000đ' },
  'trung-quoc': { country: 'Trung Quốc', flag: '🇨🇳', processingTime: '3-5 ngày', fee: 'Từ 1.500.000đ' },
  'nhat-ban': { country: 'Nhật Bản', flag: '🇯🇵', processingTime: '7-14 ngày', fee: 'Từ 3.000.000đ' },
  'an-do': { country: 'Ấn Độ', flag: '🇮🇳', processingTime: '5-7 ngày', fee: 'Từ 2.500.000đ' },
  'uc': { country: 'Úc', flag: '🇦🇺', processingTime: '10-15 ngày', fee: 'Từ 5.000.000đ' }
}

const visa = visaData[slug] || { country: 'Visa', flag: '📄', processingTime: 'Liên hệ', fee: 'Liên hệ' }

const requirements = [
  'Hộ chiếu còn hạn ít nhất 6 tháng',
  'Hình 3.5 x 4.5 cm (ảnh mới chụp trong 3 tháng)',
  'CMND/CCCD bản sao',
  'Hộ khẩu (bản sao)',
  'Đơn xin visa',
  'Lịch trình chuyến đi',
  'Xác nhận đặt phòng khách sạn',
  'Vé máy bay khứ hồi (nếu có)'
]

const documentTypes = [
  { type: 'Visa Du lịch', description: 'Dành cho mục đích tham quan, du lịch' },
  { type: 'Visa Công tác', description: 'Dành cho mục đích công việc, họp hành' },
  { type: 'Visa Du học', description: 'Dành cho học sinh, sinh viên' },
  { type: 'Visa Thăm thân', description: 'Dành cho thăm người thân' }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16">
      <div class="container">
        <AppBreadcrumb
          :items="[
            { label: 'Visa', to: '/visa' },
            { label: visa.country }
          ]"
          class="mb-6 text-white/70"
        />
        <div class="flex items-center gap-4">
          <span class="text-6xl">{{ visa.flag }}</span>
          <div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Visa {{ visa.country }}</h1>
            <p class="text-lg text-white/80">Hỗ trợ làm visa {{ visa.country }} nhanh chóng, hiệu quả</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Document Types -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Các loại Visa</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div
            v-for="doc in documentTypes"
            :key="doc.type"
            class="bg-white rounded-xl p-6 shadow-card border-t-4 border-primary"
          >
            <h3 class="font-bold text-gray-900 mb-2">{{ doc.type }}</h3>
            <p class="text-gray-600 text-sm">{{ doc.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Hồ sơ cần thiết</h2>
            <ul class="space-y-3">
              <li
                v-for="(req, index) in requirements"
                :key="index"
                class="flex items-start gap-3"
              >
                <span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">{{ index + 1 }}</span>
                <span class="text-gray-700">{{ req }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl shadow-card p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Thông tin dịch vụ</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center pb-4 border-b">
                <span class="text-gray-600">Thời gian xử lý</span>
                <span class="font-bold text-primary">{{ visa.processingTime }}</span>
              </div>
              <div class="flex justify-between items-center pb-4 border-b">
                <span class="text-gray-600">Phí dịch vụ</span>
                <span class="font-bold text-primary">{{ visa.fee }}</span>
              </div>
              <div class="flex justify-between items-center pb-4 border-b">
                <span class="text-gray-600">Tư vấn</span>
                <span class="font-bold text-green-600">Miễn phí</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Hỗ trợ</span>
                <span class="font-bold text-green-600">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Quy trình làm Visa</h2>
        <div class="max-w-4xl mx-auto mt-12">
          <div class="space-y-6">
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Tư vấn và Đăng ký</h3>
                <p class="text-gray-600">Liên hệ để được tư vấn loại visa phù hợp và đăng ký dịch vụ</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Chuẩn bị hồ sơ</h3>
                <p class="text-gray-600">Hướng dẫn chuẩn bị và kiểm tra hồ sơ đầy đủ, chính xác</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Nộp và Theo dõi</h3>
                <p class="text-gray-600">Nộp hồ sơ và theo dõi tiến trình xử lý liên tục</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Nhận Visa</h3>
                <p class="text-gray-600">Nhận kết quả và tư vấn thêm nếu cần thiết</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-4">Bạn cần làm Visa {{ visa.country }}?</h2>
        <p class="text-white/80 mb-8">Liên hệ ngay để được tư vấn miễn phí</p>
        <AppButton variant="white" size="lg" to="/lien-he">
          Liên hệ ngay
        </AppButton>
      </div>
    </section>
  </div>
</template>
