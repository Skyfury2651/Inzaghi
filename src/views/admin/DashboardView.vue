<script setup lang="ts">
const stats = [
  { label: 'Tổng dịch vụ', value: '125', change: '+5%', color: 'bg-blue-500' },
  { label: 'Dự án', value: '89', change: '+12%', color: 'bg-green-500' },
  { label: 'Khách hàng', value: '6,234', change: '+8%', color: 'bg-purple-500' },
  { label: 'Yêu cầu báo giá', value: '24', change: 'Mới', color: 'bg-orange-500' }
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

    <!-- Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white rounded-xl p-6 shadow-sm"
      >
        <div class="flex items-center justify-between mb-4">
          <div :class="[stat.color, 'w-12 h-12 rounded-lg flex items-center justify-center']">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span class="text-sm text-green-600 font-medium">{{ stat.change }}</span>
        </div>
        <div class="text-2xl font-bold text-gray-900">{{ stat.value }}</div>
        <div class="text-sm text-gray-500">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="grid lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl p-6 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Yêu cầu báo giá gần đây</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between py-3 border-b">
            <div>
              <div class="font-medium text-gray-900">Nguyễn Văn A</div>
              <div class="text-sm text-gray-500">Dịch thuật tài liệu</div>
            </div>
            <span class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Mới</span>
          </div>
          <div class="flex items-center justify-between py-3 border-b">
            <div>
              <div class="font-medium text-gray-900">Trần Thị B</div>
              <div class="text-sm text-gray-500">Phiên dịch hội thảo</div>
            </div>
            <span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Đã liên hệ</span>
          </div>
          <div class="flex items-center justify-between py-3">
            <div>
              <div class="font-medium text-gray-900">Lê Văn C</div>
              <div class="text-sm text-gray-500">Dịch website</div>
            </div>
            <span class="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Đã báo giá</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Hoạt động gần đây</h2>
        <div class="space-y-4">
          <div class="flex gap-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <div class="text-sm text-gray-900">Thêm dự án mới: Samsung 2024</div>
              <div class="text-xs text-gray-500">2 giờ trước</div>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <div class="text-sm text-gray-900">Cập nhật bảng giá phiên dịch</div>
              <div class="text-xs text-gray-500">5 giờ trước</div>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <div class="text-sm text-gray-900">Thêm bài viết blog mới</div>
              <div class="text-xs text-gray-500">1 ngày trước</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
