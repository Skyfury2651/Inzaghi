<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useSettingsStore } from '@/stores'

const settingsStore = useSettingsStore()
const route = useRoute()

const isMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)

const navigation = computed(() => settingsStore.mainNavigation)
const settings = computed(() => settingsStore.settings)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function toggleDropdown(label: string) {
  activeDropdown.value = activeDropdown.value === label ? null : label
}

function closeMenu() {
  isMenuOpen.value = false
  activeDropdown.value = null
}
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <!-- Top Bar -->
    <div class="bg-secondary text-white py-2 hidden md:block">
      <div class="container flex justify-between items-center text-sm">
        <div class="flex items-center gap-4">
          <a :href="`tel:${settings.phones[0]}`" class="flex items-center gap-1 hover:text-accent">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {{ settings.phones[0] }}
          </a>
          <a :href="`mailto:${settings.emails[0]}`" class="flex items-center gap-1 hover:text-accent">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {{ settings.emails[0] }}
          </a>
        </div>
        <div class="flex items-center gap-4">
          <a v-if="settings.socialMedia.facebook" :href="settings.socialMedia.facebook" target="_blank" class="hover:text-accent">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a v-if="settings.socialMedia.linkedin" :href="settings.socialMedia.linkedin" target="_blank" class="hover:text-accent">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="container py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2" @click="closeMenu">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">P</span>
          </div>
          <div>
            <div class="font-heading font-bold text-primary text-lg leading-tight">DỊCH THUẬT</div>
            <div class="text-xs text-gray-500 -mt-1">PHƯƠNG ĐÔNG</div>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <template v-for="item in navigation" :key="item.label">
            <div v-if="item.children" class="relative group">
              <button
                class="px-4 py-2 text-gray-700 hover:text-primary font-medium flex items-center gap-1 transition-colors"
              >
                {{ item.label }}
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div class="bg-white rounded-lg shadow-dropdown py-2 min-w-[200px]">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
                  >
                    Tất cả {{ item.label }}
                  </RouterLink>
                  <RouterLink
                    v-for="child in item.children"
                    :key="child.label"
                    :to="child.to || '#'"
                    class="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary"
                  >
                    {{ child.label }}
                  </RouterLink>
                </div>
              </div>
            </div>
            <RouterLink
              v-else
              :to="item.to || '#'"
              class="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              :class="{ 'text-primary': route.path === item.to }"
            >
              {{ item.label }}
            </RouterLink>
          </template>
        </nav>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center gap-4">
          <a :href="`tel:${settings.phones[0]}`" class="text-primary font-bold">
            {{ settings.phones[0] }}
          </a>
          <RouterLink to="/lien-he" class="btn-primary">
            Nhận báo giá
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-gray-700"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden bg-white border-t"
    >
      <nav class="container py-4">
        <template v-for="item in navigation" :key="item.label">
          <div v-if="item.children">
            <button
              class="w-full flex items-center justify-between py-3 text-gray-700 font-medium"
              @click="toggleDropdown(item.label)"
            >
              {{ item.label }}
              <svg
                class="w-5 h-5 transition-transform"
                :class="{ 'rotate-180': activeDropdown === item.label }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="activeDropdown === item.label" class="pl-4 pb-2">
              <RouterLink
                v-if="item.to"
                :to="item.to"
                class="block py-2 text-gray-600 hover:text-primary"
                @click="closeMenu"
              >
                Tất cả {{ item.label }}
              </RouterLink>
              <RouterLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to || '#'"
                class="block py-2 text-gray-600 hover:text-primary"
                @click="closeMenu"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>
          <RouterLink
            v-else
            :to="item.to || '#'"
            class="block py-3 text-gray-700 font-medium hover:text-primary"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </template>
        <div class="pt-4 mt-4 border-t">
          <RouterLink to="/lien-he" class="btn-primary w-full text-center" @click="closeMenu">
            Nhận báo giá
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>
