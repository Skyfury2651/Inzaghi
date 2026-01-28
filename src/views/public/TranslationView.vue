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
  { id: '1', slug: 'website', title: 'Dịch Website', thumbnail: '', description: 'Dịch thuật website đa ngôn ngữ chuyên nghiệp' },
  { id: '2', slug: 'game', title: 'Dịch Game', thumbnail: '', description: 'Localization game chất lượng cao' },
  { id: '3', slug: 'phan-mem', title: 'Dịch App/Phần mềm', thumbnail: '', description: 'Dịch và bản địa hóa ứng dụng' },
  { id: '4', slug: 'video-subtitle', title: 'Dịch Video/Subtitle', thumbnail: '', description: 'Dịch phụ đề video chuyên nghiệp' },
  { id: '5', slug: 'hop-dong', title: 'Dịch Hợp đồng', thumbnail: '', description: 'Dịch hợp đồng pháp lý chuẩn xác' },
  { id: '6', slug: 'ho-so-nang-luc', title: 'Dịch Hồ sơ năng lực', thumbnail: '', description: 'Dịch hồ sơ năng lực doanh nghiệp' },
  { id: '7', slug: 'bao-cao-tai-chinh', title: 'Dịch Báo cáo tài chính', thumbnail: '', description: 'Dịch báo cáo tài chính chính xác' },
  { id: '8', slug: 'bao-cao-thuong-nien', title: 'Dịch Báo cáo thường niên', thumbnail: '', description: 'Dịch annual report chuyên nghiệp' },
  { id: '9', slug: 'ho-so-thau', title: 'Dịch Hồ sơ thầu', thumbnail: '', description: 'Dịch hồ sơ đấu thầu đa ngôn ngữ' },
  { id: '10', slug: 'dieu-le-cong-ty', title: 'Dịch Điều lệ công ty', thumbnail: '', description: 'Dịch điều lệ và quy chế công ty' },
  { id: '11', slug: 'hoa-don', title: 'Dịch Hóa đơn', thumbnail: '', description: 'Dịch hóa đơn thương mại' },
  { id: '12', slug: 'chung-tu-ke-toan', title: 'Dịch Chứng từ kế toán', thumbnail: '', description: 'Dịch chứng từ kế toán chuẩn' }
])

const totalPages = ref(61)

onMounted(() => {
  servicesStore.fetchServices('translation', currentPage.value)
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Dịch thuật' }]" />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Dịch vụ Dịch thuật</h1>
        <p class="text-gray-600 mt-2">Tổng hợp các dịch vụ dịch thuật chuyên nghiệp</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <router-link
            v-for="service in services"
            :key="service.id"
            :to="`/dich-thuat/${service.slug}`"
            class="group"
          >
            <AppCard hoverable padding="none">
              <!-- Thumbnail -->
              <div class="aspect-video bg-gray-100 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
