<script setup lang="ts">
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppButton from '@/components/common/AppButton.vue'

const positions = [
  {
    title: 'Biên dịch viên tiếng Anh - Pháp',
    type: 'Full-time',
    location: 'Hà Nội',
    requirements: ['IELTS 7.5+', 'Thành thạo Word, Excel', 'Kinh nghiệm 2 năm+'],
    benefits: ['Lương khởi điểm: 10-15 triệu', 'Bảo hiểm full', 'Du lịch hàng năm']
  },
  {
    title: 'Phiên dịch viên tiếng Trung',
    type: 'Part-time',
    location: 'Hồ Chí Minh',
    requirements: ['HSK 5+', 'Kỹ năng giao tiếp tốt', 'Sẵn sàng đi công tác'],
    benefits: ['Lương theo dự án', 'Thưởng hấp dẫn', 'Đào tạo chuyên sâu']
  }
]

const benefits = [
  { icon: '💰', title: 'Thu nhập hấp dẫn', desc: 'Lương cạnh tranh + thưởng doanh số' },
  { icon: '📈', title: 'Cơ hội thăng tiến', desc: 'Lộ trình phát triển rõ ràng' },
  { icon: '🏥', title: 'Phúc lợi đầy đủ', desc: 'BHXH, BHYT, BHTN' },
  { icon: '🎓', title: 'Đào tạo liên tục', desc: 'Cập nhật kiến thức thường xuyên' },
  { icon: '🌴', title: 'Du lịch hàng năm', desc: 'Team building mỗi năm' },
  { icon: '⏰', title: 'Thời gian linh hoạt', desc: 'Làm việc từ xa có thể' }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Tuyển dụng' }]" class="mb-6 text-white/70" />
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Tham gia đội ngũ của chúng tôi</h1>
        <p class="text-lg text-white/80 max-w-2xl">
          Chúng tôi luôn tìm kiếm những tài năng đam mê ngôn ngữ và muốn phát triển sự nghiệp trong lĩnh vực dịch thuật
        </p>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Quyền lợi của bạn</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="bg-white rounded-xl p-6 shadow-card text-center"
          >
            <div class="text-4xl mb-3">{{ benefit.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Positions -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Vị trí đang tuyển</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-12">
          <div
            v-for="(position, index) in positions"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-card"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-900">{{ position.title }}</h3>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {{ position.type }}
              </span>
            </div>
            <div class="flex items-center gap-2 text-gray-600 mb-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ position.location }}
            </div>

            <div class="mb-4">
              <h4 class="font-medium text-gray-900 mb-2">Yêu cầu:</h4>
              <ul class="space-y-1">
                <li
                  v-for="(req, i) in position.requirements"
                  :key="i"
                  class="text-sm text-gray-600 flex items-start gap-2"
                >
                  <svg class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ req }}
                </li>
              </ul>
            </div>

            <div class="mb-4">
              <h4 class="font-medium text-gray-900 mb-2">Quyền lợi:</h4>
              <ul class="space-y-1">
                <li
                  v-for="(benefit, i) in position.benefits"
                  :key="i"
                  class="text-sm text-gray-600 flex items-start gap-2"
                >
                  <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>

            <AppButton variant="outline" class="w-full" to="/lien-he">
              Ứng tuyển ngay
            </AppButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form -->
    <section class="section">
      <div class="container">
        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Gửi hồ sơ ứng tuyển</h2>
          <p class="text-gray-600 mb-6">
            Nếu bạn không tìm thấy vị trí phù hợp, hãy gửi hồ sơ cho chúng tôi. Chúng tôi sẽ liên hệ khi có vị trí phù hợp.
          </p>

          <a
            href="https://forms.google.com"
            target="_blank"
            class="flex items-center justify-center gap-3 w-full py-4 bg-white border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all font-medium"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Ứng tuyển qua Google Form
          </a>

          <div class="mt-6 pt-6 border-t">
            <h3 class="font-medium text-gray-900 mb-3">Hoặc gửi email:</h3>
            <a href="mailto:hr@dichthuatphuongdong.com" class="text-primary hover:underline">
              hr@dichthuatphuongdong.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Địa điểm làm việc</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-12">
          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Văn phòng Hà Nội</h3>
                <p class="text-gray-600 text-sm">Trụ sở chính</p>
              </div>
            </div>
            <p class="text-gray-600">149 Phố Khương Trung, Khương Đình, Thanh Xuân</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Văn phòng TP.HCM</h3>
                <p class="text-gray-600 text-sm">Chi nhánh</p>
              </div>
            </div>
            <p class="text-gray-600">123 Đường ABC, Quận 1</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
