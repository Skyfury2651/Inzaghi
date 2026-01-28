<script setup lang="ts">
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppCard from '@/components/common/AppCard.vue'

const teamMembers = [
  { id: '1', slug: 'nguyen-van-a', name: 'Nguyễn Văn A', location: 'Hà Nội', languages: ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Nhật'] },
  { id: '2', slug: 'tran-thi-b', name: 'Trần Thị B', location: 'Hồ Chí Minh', languages: ['Tiếng Việt', 'Tiếng Hàn'] },
  { id: '3', slug: 'le-van-c', name: 'Lê Văn C', location: 'Hà Nội', languages: ['Tiếng Việt', 'Tiếng Trung'] },
  { id: '4', slug: 'pham-thi-d', name: 'Phạm Thị D', location: 'Hồ Chí Minh', languages: ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Pháp'] },
  { id: '5', slug: 'hoang-van-e', name: 'Hoàng Văn E', location: 'Hà Nội', languages: ['Tiếng Việt', 'Tiếng Đức'] },
  { id: '6', slug: 'do-thi-f', name: 'Đỗ Thị F', location: 'Hà Nội', languages: ['Tiếng Việt', 'Tiếng Nga'] }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Nhân sự' }]" />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Đội ngũ nhân sự</h1>
        <p class="text-gray-600 mt-2">Biên dịch viên và phiên dịch viên chuyên nghiệp</p>
      </div>
    </section>

    <!-- Team Grid -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <router-link
            v-for="member in teamMembers"
            :key="member.id"
            :to="`/nhan-su/${member.slug}`"
            class="group"
          >
            <AppCard hoverable padding="none" class="text-center">
              <!-- Avatar -->
              <div class="p-6 pb-0">
                <div class="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              <!-- Info -->
              <div class="p-6">
                <h3 class="font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {{ member.name }}
                </h3>
                <p class="text-sm text-gray-500 mt-1">{{ member.location }}</p>
                <ul class="mt-3 space-y-1">
                  <li
                    v-for="lang in member.languages"
                    :key="lang"
                    class="text-xs text-gray-600"
                  >
                    • {{ lang }}
                  </li>
                </ul>
              </div>
            </AppCard>
          </router-link>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
          <button class="btn-outline">
            Xem thêm (21) nhân sự khác
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
