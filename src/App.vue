<script setup lang="ts">
import { onMounted } from 'vue'
import { useSettingsStore, useAuthStore } from './stores'

const settingsStore = useSettingsStore()
const authStore = useAuthStore()

onMounted(async () => {
  await settingsStore.fetchSettings()
  await authStore.checkAuth()
})
</script>

<template>
  <router-view />
</template>
