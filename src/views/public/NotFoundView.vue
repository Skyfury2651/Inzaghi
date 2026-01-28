<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-8">Trang bạn tìm kiếm không tồn tại</p>
      <RouterLink to="/" class="btn-primary">
        Về trang chủ
      </RouterLink>
    </div>
  </div>
</template>
