<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppCard from '@/components/common/AppCard.vue'
import AppPagination from '@/components/common/AppPagination.vue'
import { useServicesStore } from '@/stores'

const servicesStore = useServicesStore()

const currentPage = ref(1)

// Mock data for demonstration
const services = ref([
  { id: '1', slug: 'tieng-anh', title: 'Phiên dịch Tiếng Anh', thumbnail: '', description: 'Phiên dịch tiếng Anh chuyên nghiệp' },
  { id: '2', slug: 'tieng-nhat', title: 'Phiên dịch Tiếng Nhật', thumbnail: '', description: 'Phiên dịch tiếng Nhật cho doanh nghiệp' },
  { id: '3', slug: 'tieng-han', title: 'Phiên dịch Tiếng Hàn', thumbnail: '', description: 'Phiên dịch tiếng Hàn Quốc' },
  { id: '4', slug: 'tieng-trung', title: 'Phiên dịch Tiếng Trung', thumbnail: '', description: 'Phiên dịch tiếng Trung Quốc' },
  { id: '5', slug: 'du-an', title: 'Phiên dịch Dự án', thumbnail: '', description: 'Phiên dịch cho các dự án lớn' },
  { id: '6', slug: 'chuyen-giao-cong-nghe', title: 'Phiên dịch Chuyển giao công nghệ', thumbnail: '', description: 'Phiên dịch chuyển giao công nghệ' },
  { id: '7', slug: 'hoi-thao', title: 'Phiên dịch Hội thảo', thumbnail: '', description: 'Phiên dịch hội nghị, hội thảo' },
  { id: '8', slug: 'cabin', title: 'Phiên dịch Cabin', thumbnail: '', description: 'Phiên dịch cabin chuyên nghiệp' },
  { id: '9', slug: 'dam-phan', title: 'Phiên dịch Đàm phán', thumbnail: '', description: 'Phiên dịch đàm phán thương mại' },
  { id: '10', slug: 'thap-tung', title: 'Phiên dịch Tháp tùng', thumbnail: '', description: 'Phiên dịch tháp tùng doanh nhân' },
  { id: '11', slug: 'mc-song-ngu', title: 'MC Song ngữ', thumbnail: '', description: 'Dịch vụ MC song ngữ' },
  { id: '12', slug: 'online', title: 'Phiên dịch Online', thumbnail: '', description: 'Phiên dịch qua Zoom, Teams' }
])

const totalPages = ref(31)

onMounted(() => {
  servicesStore.fetchServices('interpretation', currentPage.value)
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Phiên dịch' }]" />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Dịch vụ Phiên dịch</h1>
        <p class="text-gray-600 mt-2">Tổng hợp các dịch vụ phiên dịch chuyên nghiệp</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <router-link
            v-for="service in services"
            :key="service.id"
            :to="`/phien-dich/${service.slug}`"
            class="group"
          >
            <AppCard hoverable padding="none">
              <!-- Thumbnail -->
              <div class="aspect-video bg-gray-100 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div class="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-white text-3xl">+</span>
                </div>
              </div>
              <!-- Content -->
              <div class="p-4">
                <h3 class="font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {{ service.title }}
                </h3>
                <p class="text-sm text-gray-500 mt-1 line-clamp-2">
                  {{ service.description }}
                </p>
              </div>
            </AppCard>
          </router-link>
        </div>

        <!-- Pagination -->
        <div class="mt-12">
          <AppPagination
            v-model:current-page="currentPage"
            :total-pages="totalPages"
          />
          <p class="text-center text-gray-500 mt-4">Trang {{ currentPage }} / {{ totalPages }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
