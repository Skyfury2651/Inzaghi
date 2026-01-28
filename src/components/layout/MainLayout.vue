<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import FloatingContact from '@/components/widgets/FloatingContact.vue'
import BackToTop from '@/components/widgets/BackToTop.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
    <FloatingContact />
    <BackToTop />
  </div>
</template>
