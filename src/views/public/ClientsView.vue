<script setup lang="ts">
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Khách hàng' }]" />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Khách hàng của chúng tôi</h1>
        <p class="text-gray-600 mt-2">Hơn 6000+ doanh nghiệp đã tin tưởng sử dụng dịch vụ</p>
      </div>
    </section>

    <!-- Client Logos -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          <div
            v-for="i in 48"
            :key="i"
            class="aspect-[2/1] bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:border-primary hover:shadow-md transition-all"
          >
            <span class="text-gray-400 text-sm">Logo {{ i }}</span>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
          <button class="btn-outline">
            Xem thêm khách hàng
          </button>
        </div>
      </div>
    </section>

    <!-- Industries -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Phục vụ đa ngành nghề</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div class="bg-white rounded-xl p-6 text-center shadow-card">
            <div class="text-4xl mb-3">🏭</div>
            <h3 class="font-bold text-gray-900">Sản xuất</h3>
          </div>
          <div class="bg-white rounded-xl p-6 text-center shadow-card">
            <div class="text-4xl mb-3">💻</div>
            <h3 class="font-bold text-gray-900">Công nghệ</h3>
          </div>
          <div class="bg-white rounded-xl p-6 text-center shadow-card">
            <div class="text-4xl mb-3">🏥</div>
            <h3 class="font-bold text-gray-900">Y tế</h3>
          </div>
          <div class="bg-white rounded-xl p-6 text-center shadow-card">
            <div class="text-4xl mb-3">🏦</div>
            <h3 class="font-bold text-gray-900">Tài chính</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
