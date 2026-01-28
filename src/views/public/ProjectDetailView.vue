<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppButton from '@/components/common/AppButton.vue'

const route = useRoute()
const slug = route.params.slug as string

const project = {
  title: 'Triển lãm Food & Hotel Vietnam 2024',
  client: 'Vietnam Exhibition JSC',
  industry: 'Thực phẩm & đồ uống',
  date: 'Tháng 3/2024',
  location: 'HCMC',
  service: 'Phiên dịch hội thảo',
  description: 'Cung cấp dịch vụ phiên dịch song ngữ cho các buổi hội thảo, giao dịch thương mại trong khuôn khổ triển lãm Food & Hotel Vietnam 2024 với hơn 200 doanh nghiệp tham gia.',
  scope: [
    '03 phiên dịch viên tiếng Anh - Trung',
    '05 phiên dịch viên tiếng Anh - Hàn',
    '02 phiên dịch viên tiếng Anh - Nhật',
    'Phiên dịch tại 10 gian hàng',
    'Hỗ trợ đàm phán thương mại'
  ],
  results: [
    'Hỗ trợ thành công 50+ cuộc đàm phán',
    'Đạt được 15 hợp đồng hợp tác',
    'Khách hàng đánh giá 5/5 sao',
    'Không có sự cố ngôn ngữ'
  ]
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb
          :items="[
            { label: 'Dự án', to: '/du-an' },
            { label: project.title }
          ]"
        />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">{{ project.title }}</h1>
        <p class="text-gray-600 mt-2">{{ project.client }}</p>
      </div>
    </section>

    <!-- Project Info -->
    <section class="section">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Image Gallery -->
          <div>
            <div class="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
              <svg class="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <!-- Details -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Thông tin dự án</h2>
            <dl class="space-y-4">
              <div class="flex justify-between py-3 border-b">
                <dt class="text-gray-600">Khách hàng</dt>
                <dd class="font-medium text-gray-900">{{ project.client }}</dd>
              </div>
              <div class="flex justify-between py-3 border-b">
                <dt class="text-gray-600">Ngành nghề</dt>
                <dd class="font-medium text-gray-900">{{ project.industry }}</dd>
              </div>
              <div class="flex justify-between py-3 border-b">
                <dt class="text-gray-600">Thời gian</dt>
                <dd class="font-medium text-gray-900">{{ project.date }}</dd>
              </div>
              <div class="flex justify-between py-3 border-b">
                <dt class="text-gray-600">Địa điểm</dt>
                <dd class="font-medium text-gray-900">{{ project.location }}</dd>
              </div>
              <div class="flex justify-between py-3">
                <dt class="text-gray-600">Dịch vụ</dt>
                <dd class="font-medium text-primary">{{ project.service }}</dd>
              </div>
            </dl>

            <div class="mt-8">
              <AppButton variant="primary" size="lg" to="/lien-he">
                Yêu cầu dịch vụ tương tự
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Mô tả dự án</h2>
            <p class="text-gray-700 leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Phạm vi công việc</h2>
            <ul class="space-y-3">
              <li
                v-for="(item, index) in project.scope"
                :key="index"
                class="flex items-start gap-3"
              >
                <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Kết quả đạt được</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div
            v-for="(result, index) in project.results"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-card text-center"
          >
            <div class="text-4xl mb-3">🎯</div>
            <p class="text-gray-700">{{ result }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Dự án tương tự</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <router-link to="/du-an/vinamilk-2024" class="group">
            <div class="bg-white rounded-xl p-6 shadow-card hover:shadow-dropdown transition-all">
              <div class="aspect-video bg-gray-100 rounded-lg mb-4"></div>
              <span class="text-xs text-primary font-medium">Thực phẩm & đồ uống</span>
              <h3 class="font-bold text-gray-900 mt-1 group-hover:text-primary">Phiên dịch hội nghị Vinamilk</h3>
            </div>
          </router-link>
          <router-link to="/du-an/samsung-2024" class="group">
            <div class="bg-white rounded-xl p-6 shadow-card hover:shadow-dropdown transition-all">
              <div class="aspect-video bg-gray-100 rounded-lg mb-4"></div>
              <span class="text-xs text-primary font-medium">Điện tử & Điện máy</span>
              <h3 class="font-bold text-gray-900 mt-1 group-hover:text-primary">Phiên dịch Samsung Electronics</h3>
            </div>
          </router-link>
          <router-link to="/du-an/toyota-training" class="group">
            <div class="bg-white rounded-xl p-6 shadow-card hover:shadow-dropdown transition-all">
              <div class="aspect-video bg-gray-100 rounded-lg mb-4"></div>
              <span class="text-xs text-primary font-medium">Ô tô & Xe máy</span>
              <h3 class="font-bold text-gray-900 mt-1 group-hover:text-primary">Đào tạo kỹ thuật Toyota</h3>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
