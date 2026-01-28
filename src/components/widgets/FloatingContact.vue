<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSettingsStore } from '@/stores'

const settingsStore = useSettingsStore()
const settings = computed(() => settingsStore.settings)

const isExpanded = ref(false)

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
    <!-- Contact Options -->
    <Transition name="slide-up">
      <div v-if="isExpanded" class="flex flex-col gap-3">
        <!-- Zalo -->
        <a
          v-if="settings.socialMedia.zalo"
          :href="settings.socialMedia.zalo"
          target="_blank"
          class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Chat Zalo"
        >
          <svg class="w-6 h-6 text-white" viewBox="0 0 48 48" fill="currentColor">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm9.5 26.5c-.55 0-1-.45-1-1v-8.4l-5.15 8.65c-.2.35-.55.55-.95.55h-.8c-.4 0-.75-.2-.95-.55L19.5 21.1v8.4c0 .55-.45 1-1 1s-1-.45-1-1v-11c0-.55.45-1 1-1h1.4c.4 0 .75.2.95.55l4.65 7.8 4.65-7.8c.2-.35.55-.55.95-.55h1.4c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1z"/>
          </svg>
        </a>

        <!-- Messenger -->
        <a
          v-if="settings.socialMedia.facebook"
          :href="settings.socialMedia.facebook"
          target="_blank"
          class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Messenger"
        >
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.08.36-.1.55-.06.91.25 1.87.38 2.88.38 5.64 0 10-4.13 10-9.68C22 6.13 17.64 2 12 2zm5.89 7.59l-2.89 4.58c-.46.73-1.46.91-2.13.38l-2.3-1.72a.6.6 0 00-.72 0l-3.1 2.35c-.41.32-.95-.18-.68-.63l2.89-4.58c.46-.73 1.46-.91 2.13-.38l2.3 1.72a.6.6 0 00.72 0l3.1-2.35c.41-.32.95.18.68.63z"/>
          </svg>
        </a>

        <!-- Phone -->
        <a
          :href="`tel:${settings.phones[0]}`"
          class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Gọi điện"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </Transition>

    <!-- Main Toggle Button -->
    <button
      @click="toggleExpand"
      class="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all"
      :class="{ 'rotate-45': isExpanded }"
    >
      <svg v-if="!isExpanded" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <svg v-else class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
