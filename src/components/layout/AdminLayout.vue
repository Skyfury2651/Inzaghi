<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores'

const route = useRoute()
const authStore = useAuthStore()

const isSidebarOpen = ref(true)

const menuItems = [
  { icon: 'home', label: 'Dashboard', to: '/admin' },
  { icon: 'document', label: 'Dịch vụ', to: '/admin/services' },
  { icon: 'folder', label: 'Dự án', to: '/admin/projects' },
  { icon: 'users', label: 'Khách hàng', to: '/admin/clients' },
  { icon: 'user-group', label: 'Nhân sự', to: '/admin/team' },
  { icon: 'newspaper', label: 'Blog', to: '/admin/blog' },
  { icon: 'currency', label: 'Bảng giá', to: '/admin/pricing' },
  { icon: 'inbox', label: 'Báo giá', to: '/admin/quotes' },
  { icon: 'cog', label: 'Cài đặt', to: '/admin/settings' },
  { icon: 'users', label: 'Người dùng', to: '/admin/users' }
]

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

async function handleLogout() {
  await authStore.logout()
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Sidebar -->
    <aside
      class="bg-gray-900 text-white transition-all duration-300"
      :class="isSidebarOpen ? 'w-64' : 'w-20'"
    >
      <div class="p-4 border-b border-gray-800">
        <RouterLink to="/admin" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-white font-bold text-xl">P</span>
          </div>
          <span v-if="isSidebarOpen" class="font-bold">Admin Panel</span>
        </RouterLink>
      </div>

      <nav class="p-4 space-y-1">
        <RouterLink
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
          :class="route.path === item.to || route.path.startsWith(item.to + '/')
            ? 'bg-primary text-white'
            : 'text-gray-400 hover:bg-gray-800 hover:text-white'"
        >
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span v-if="isSidebarOpen">{{ item.label }}</span>
        </RouterLink>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Bar -->
      <header class="bg-white shadow-sm h-16 flex items-center justify-between px-6">
        <button @click="toggleSidebar" class="p-2 hover:bg-gray-100 rounded-lg">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div class="flex items-center gap-4">
          <RouterLink to="/" target="_blank" class="text-sm text-gray-600 hover:text-primary">
            Xem trang web
          </RouterLink>
          <button
            @click="handleLogout"
            class="text-sm text-gray-600 hover:text-primary"
          >
            Đăng xuất
          </button>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>
