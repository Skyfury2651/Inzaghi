<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores'
import AppButton from '@/components/common/AppButton.vue'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref('')

async function handleLogin() {
  error.value = ''
  const result = await authStore.login(email.value, password.value)
  if (result.success) {
    router.push('/admin')
  } else {
    error.value = 'Email hoặc mật khẩu không đúng'
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
          <span class="text-white font-bold text-2xl">P</span>
        </div>
        <h1 class="text-2xl font-bold text-gray-900">Admin Login</h1>
        <p class="text-gray-600 mt-1">Dịch Thuật Phương Đông</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div v-if="error" class="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
          {{ error }}
        </div>

        <div>
          <label class="label">Email</label>
          <input
            v-model="email"
            type="email"
            class="input"
            placeholder="admin@example.com"
            required
          />
        </div>

        <div>
          <label class="label">Mật khẩu</label>
          <input
            v-model="password"
            type="password"
            class="input"
            placeholder="••••••••"
            required
          />
        </div>

        <AppButton type="submit" variant="primary" size="lg" class="w-full" :loading="authStore.loading">
          Đăng nhập
        </AppButton>
      </form>

      <div class="mt-6 text-center">
        <router-link to="/" class="text-sm text-gray-600 hover:text-primary">
          ← Về trang chủ
        </router-link>
      </div>
    </div>
  </div>
</template>
