<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppCard from '@/components/common/AppCard.vue'
import AppButton from '@/components/common/AppButton.vue'

const route = useRoute()
const slug = route.params.slug as string

const member = {
  name: 'Nguyễn Văn A',
  role: 'Biên dịch viên tiếng Anh - Nhật',
  location: 'Hà Nội',
  email: 'nguyenvana@dichthuatphuongdong.com',
  phone: '0912345678',
  languages: ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Nhật'],
  specializations: ['Kỹ thuật', 'IT', 'Tài chính'],
  experience: '8 năm',
  education: 'Thạc sĩ Ngôn ngữ học - Đại học Hà Nội',
  bio: 'Có hơn 8 năm kinh nghiệm trong lĩnh vực dịch thuật kỹ thuật và tài chính. Đã hoàn thành hơn 500 dự án dịch thuật cho các khách hàng lớn như FPT, Viettel, Samsung.',
  projects: [
    'Dịch tài liệu kỹ thuật Samsung Electronics',
    'Phiên dịch hội thảo FPT Software',
    'Dịch báo cáo tài chính Viettel',
    'Phiên dịch đàm phán thương mại Japan-Vietnam'
  ]
}

const testimonials = [
  {
    client: 'Samsung Electronics',
    text: 'Anh A đã hoàn thành xuất sắc dự án dịch thuật tài liệu kỹ thuật của chúng tôi. Độ chính xác cao và đúng tiến độ.',
    rating: 5
  },
  {
    client: 'FPT Software',
    text: 'Rất hài lòng với chất lượng dịch vụ. Sự am hiểu chuyên ngành IT của anh A rất ấn tượng.',
    rating: 5
  }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb
          :items="[
            { label: 'Nhân sự', to: '/nhan-su' },
            { label: member.name }
          ]"
        />
      </div>
    </section>

    <!-- Profile Header -->
    <section class="section">
      <div class="container">
        <div class="bg-white rounded-2xl shadow-card overflow-hidden">
          <div class="grid lg:grid-cols-3 gap-8 p-8">
            <!-- Avatar -->
            <div class="lg:col-span-1">
              <div class="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                <svg class="w-32 h-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            <!-- Info -->
            <div class="lg:col-span-2">
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ member.name }}</h1>
              <p class="text-lg text-primary font-medium mb-4">{{ member.role }}</p>

              <div class="grid sm:grid-cols-2 gap-4 mb-6">
                <div class="flex items-center gap-2 text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ member.location }}
                </div>
                <div class="flex items-center gap-2 text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ member.experience }} kinh nghiệm
                </div>
                <a :href="`mailto:${member.email}`" class="flex items-center gap-2 text-gray-600 hover:text-primary">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {{ member.email }}
                </a>
                <a :href="`tel:${member.phone}`" class="flex items-center gap-2 text-gray-600 hover:text-primary">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {{ member.phone }}
                </a>
              </div>

              <div class="space-y-3">
                <div>
                  <span class="text-sm text-gray-500">Ngôn ngữ</span>
                  <div class="flex flex-wrap gap-2 mt-1">
                    <span
                      v-for="lang in member.languages"
                      :key="lang"
                      class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {{ lang }}
                    </span>
                  </div>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Chuyên ngành</span>
                  <div class="flex flex-wrap gap-2 mt-1">
                    <span
                      v-for="spec in member.specializations"
                      :key="spec"
                      class="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {{ spec }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t">
                <AppButton variant="primary" to="/lien-he">
                  Yêu cầu dịch vụ
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bio -->
    <section class="section">
      <div class="container">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <AppCard padding="lg">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Giới thiệu</h2>
              <p class="text-gray-700 leading-relaxed mb-4">{{ member.bio }}</p>
              <p class="text-gray-600"><strong>Học vấn:</strong> {{ member.education }}</p>
            </AppCard>
          </div>

          <div>
            <AppCard padding="lg">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Dự án tiêu biểu</h2>
              <ul class="space-y-3">
                <li
                  v-for="(project, index) in member.projects"
                  :key="index"
                  class="flex items-start gap-2"
                >
                  <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700">{{ project }}</span>
                </li>
              </ul>
            </AppCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Đánh giá từ khách hàng</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-12">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-card"
          >
            <div class="flex items-center gap-1 mb-3">
              <svg
                v-for="i in testimonial.rating"
                :key="i"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-gray-700 italic mb-4">{{ testimonial.text }}</p>
            <p class="font-medium text-gray-900">{{ testimonial.client }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
