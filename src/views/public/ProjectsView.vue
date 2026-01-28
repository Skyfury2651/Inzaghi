<script setup lang="ts">
import { ref } from 'vue'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppCard from '@/components/common/AppCard.vue'
import { useProjectsStore } from '@/stores'

const projectsStore = useProjectsStore()

const selectedIndustry = ref('')

// Mock projects
const projects = ref([
  { id: '1', slug: 'food-hotel-2024', title: 'Triển lãm Food & Hotel Vietnam 2024', industry: 'Thực phẩm & đồ uống', image: '' },
  { id: '2', slug: 'samsung-2024', title: 'Phiên dịch Samsung Electronics', industry: 'Điện tử & Điện máy', image: '' },
  { id: '3', slug: 'toyota-training', title: 'Đào tạo kỹ thuật Toyota', industry: 'Ô tô & Xe máy', image: '' },
  { id: '4', slug: 'fpt-software', title: 'Dịch tài liệu FPT Software', industry: 'CNTT - Công nghệ cao', image: '' },
  { id: '5', slug: 'vinamilk-2024', title: 'Phiên dịch hội nghị Vinamilk', industry: 'Thực phẩm & đồ uống', image: '' },
  { id: '6', slug: 'hospital-115', title: 'Dịch hồ sơ y tế Bệnh viện 115', industry: 'Dược, y tế, sức khỏe', image: '' }
])
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Dự án' }]" />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Dự án đã thực hiện</h1>
        <p class="text-gray-600 mt-2">Các dự án dịch thuật và phiên dịch tiêu biểu</p>
      </div>
    </section>

    <!-- Filter & Grid -->
    <section class="section">
      <div class="container">
        <!-- Filter -->
        <div class="mb-8">
          <select
            v-model="selectedIndustry"
            class="input max-w-xs"
          >
            <option value="">Tất cả lĩnh vực</option>
            <option
              v-for="industry in projectsStore.industries"
              :key="industry"
              :value="industry"
            >
              {{ industry }}
            </option>
          </select>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="project in projects"
            :key="project.id"
            :to="`/du-an/${project.slug}`"
            class="group"
          >
            <AppCard hoverable padding="none">
              <div class="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-white text-4xl">+</span>
                </div>
              </div>
              <div class="p-4">
                <span class="text-xs text-primary font-medium">{{ project.industry }}</span>
                <h3 class="font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors">
                  {{ project.title }}
                </h3>
              </div>
            </AppCard>
          </router-link>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
          <button class="btn-outline">
            Xem thêm dự án
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
