<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSettingsStore } from '@/stores'

const settingsStore = useSettingsStore()
const settings = computed(() => settingsStore.settings)

const currentYear = new Date().getFullYear()

const footerLinks = {
  services: [
    { label: 'Dịch thuật', to: '/dich-thuat' },
    { label: 'Phiên dịch', to: '/phien-dich' },
    { label: 'Dịch Website', to: '/dich-thuat/website' },
    { label: 'Dịch Game', to: '/dich-thuat/game' },
    { label: 'Dịch Video/Subtitle', to: '/dich-thuat/video-subtitle' }
  ],
  company: [
    { label: 'Về chúng tôi', to: '/ve-chung-toi' },
    { label: 'Dự án', to: '/du-an' },
    { label: 'Khách hàng', to: '/khach-hang' },
    { label: 'Nhân sự', to: '/nhan-su' },
    { label: 'Tuyển dụng', to: '/tuyen-dung' }
  ],
  support: [
    { label: 'Bảng giá dịch thuật', to: '/bao-gia-dich-thuat' },
    { label: 'Bảng giá phiên dịch', to: '/bao-gia-phien-dich' },
    { label: 'Blog', to: '/blog' },
    { label: 'Liên hệ', to: '/lien-he' }
  ]
}
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer -->
    <div class="container py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <div class="font-heading font-bold text-white text-lg leading-tight">DỊCH THUẬT</div>
              <div class="text-xs text-gray-400 -mt-1">PHƯƠNG ĐÔNG</div>
            </div>
          </div>
          <p class="text-sm mb-4">
            Công ty TNHH Dịch vụ & Thương mại Elita - Đơn vị cung cấp dịch vụ dịch thuật và phiên dịch chuyên nghiệp hàng đầu Việt Nam.
          </p>
          <div class="flex gap-3">
            <a
              v-if="settings.socialMedia.facebook"
              :href="settings.socialMedia.facebook"
              target="_blank"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              v-if="settings.socialMedia.linkedin"
              :href="settings.socialMedia.linkedin"
              target="_blank"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              v-if="settings.socialMedia.youtube"
              :href="settings.socialMedia.youtube"
              target="_blank"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-bold text-lg mb-4">Dịch vụ</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.services" :key="link.to">
              <RouterLink :to="link.to" class="text-sm hover:text-primary transition-colors">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-white font-bold text-lg mb-4">Công ty</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.company" :key="link.to">
              <RouterLink :to="link.to" class="text-sm hover:text-primary transition-colors">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-bold text-lg mb-4">Liên hệ</h4>
          <ul class="space-y-3">
            <li v-for="address in settings.addresses" :key="address.city" class="text-sm">
              <div class="font-medium text-white">{{ address.city }}{{ address.isHeadquarters ? ' (Trụ sở)' : '' }}</div>
              <div>{{ address.address }}</div>
              <a :href="`tel:${address.phone}`" class="text-primary hover:underline">{{ address.phone }}</a>
            </li>
            <li>
              <a :href="`mailto:${settings.emails[0]}`" class="text-sm hover:text-primary transition-colors">
                {{ settings.emails[0] }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="container py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            © {{ currentYear }} {{ settings.companyNameVi }}. All rights reserved.
          </div>
          <div class="flex items-center gap-4">
            <span>GPKD: {{ settings.registration.businessNumber }}</span>
            <span>|</span>
            <span>Cấp ngày: {{ settings.registration.issuedDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
