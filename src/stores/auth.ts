import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'editor'
  avatar?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('auth_token'))
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')

  async function login(email: string, password: string) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
      // const response = await api.auth.login({ email, password })
      // token.value = response.token
      // user.value = response.user
      // localStorage.setItem('auth_token', response.token)
      return { success: true }
    } catch (e) {
      error.value = 'Invalid credentials'
      return { success: false }
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('auth_token')
  }

  async function fetchUser() {
    if (!token.value) return
    loading.value = true
    try {
      // TODO: Replace with actual API call
      // const response = await api.auth.me()
      // user.value = response.user
    } catch (e) {
      logout()
    } finally {
      loading.value = false
    }
  }

  async function checkAuth() {
    if (token.value) {
      await fetchUser()
    }
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    isAdmin,
    login,
    logout,
    fetchUser,
    checkAuth
  }
})
