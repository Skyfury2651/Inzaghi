<script setup lang="ts">
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import StatisticsCounter from '@/components/home/StatisticsCounter.vue'
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Về chúng tôi' }]" class="mb-6 text-white/70" />
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Về Dịch Thuật Phương Đông</h1>
        <p class="text-lg text-white/80 max-w-2xl">
          Cầu nối cho sự hợp tác và giao lưu thành công giữa doanh nghiệp Việt Nam và quốc tế
        </p>
      </div>
    </section>

    <!-- Company Info -->
    <section class="section">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Công ty TNHH Dịch vụ & Thương mại Elita</h2>
            <div class="prose prose-lg text-gray-600">
              <p>
                Dịch Thuật Phương Đông là thương hiệu của Công ty TNHH Dịch vụ & Thương mại Elita,
                được thành lập với sứ mệnh giúp các doanh nghiệp Việt Nam vươn ra thị trường quốc tế
                thông qua dịch vụ dịch thuật và phiên dịch chuyên nghiệp.
              </p>
              <p>
                Với hơn 12 năm kinh nghiệm, chúng tôi tự hào đã phục vụ hơn 6000 khách hàng,
                hoàn thành hơn 25000 dự án dịch thuật và 4500 phiên dịch thành công.
              </p>
            </div>

            <!-- Business Info -->
            <div class="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 class="font-bold text-gray-900 mb-4">Thông tin doanh nghiệp</h4>
              <ul class="space-y-2 text-gray-600">
                <li><strong>GPKD:</strong> 0107813777</li>
                <li><strong>Ngày cấp:</strong> 24/04/2017</li>
                <li><strong>Nơi cấp:</strong> Sở Kế hoạch và Đầu tư TP. Hà Nội</li>
                <li><strong>Địa chỉ:</strong> 149 Phố Khương Trung, Khương Đình, Thanh Xuân, Hà Nội</li>
              </ul>
            </div>
          </div>

          <div class="relative">
            <div class="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
              <svg class="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <StatisticsCounter />

    <!-- Mission & Vision -->
    <section class="section">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-primary/5 rounded-2xl p-8">
            <div class="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh</h3>
            <p class="text-gray-600">
              Giúp doanh nghiệp Việt Nam đi trước nhanh hơn trên thị trường toàn cầu
              thông qua dịch vụ dịch thuật và phiên dịch chất lượng cao.
            </p>
          </div>

          <div class="bg-secondary/5 rounded-2xl p-8">
            <div class="w-16 h-16 bg-secondary text-white rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
            <p class="text-gray-600">
              Trở thành đơn vị dịch thuật hàng đầu Đông Nam Á,
              là cầu nối tin cậy cho sự hợp tác quốc tế.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
