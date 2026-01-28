<script setup lang="ts">
import { ref } from 'vue'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppCard from '@/components/common/AppCard.vue'
import AppPagination from '@/components/common/AppPagination.vue'
import { useBlogStore } from '@/stores'

const blogStore = useBlogStore()
const currentPage = ref(1)

// Mock posts
const posts = [
  { id: '1', slug: 'kinh-nghiem-dich-thuat', title: 'Kinh nghiệm dịch thuật hiệu quả', excerpt: 'Chia sẻ kinh nghiệm dịch thuật từ các chuyên gia...', category: 'Chia sẻ – kinh nghiệm', date: '2026-01-20', author: 'Admin' },
  { id: '2', slug: 'thuat-ngu-y-te', title: 'Thuật ngữ y tế thường dùng', excerpt: 'Tổng hợp các thuật ngữ y tế phổ biến trong dịch thuật...', category: 'Thuật ngữ chuyên ngành', date: '2026-01-18', author: 'Admin' },
  { id: '3', slug: 'download-tu-dien', title: 'Download từ điển chuyên ngành', excerpt: 'Tài liệu từ điển chuyên ngành miễn phí...', category: 'Download tài liệu', date: '2026-01-15', author: 'Admin' },
  { id: '4', slug: 'phan-mem-ho-tro', title: 'Phần mềm hỗ trợ dịch thuật', excerpt: 'Các phần mềm CAT Tool phổ biến nhất...', category: 'Phần mềm', date: '2026-01-12', author: 'Admin' }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Blog' }]" />
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Blog</h1>
        <p class="text-gray-600 mt-2">Chia sẻ kiến thức và kinh nghiệm dịch thuật</p>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="section">
      <div class="container">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Posts -->
          <div class="lg:col-span-2">
            <div class="grid sm:grid-cols-2 gap-6">
              <router-link
                v-for="post in posts"
                :key="post.id"
                :to="`/blog/${post.slug}`"
                class="group"
              >
                <AppCard hoverable padding="none">
                  <div class="aspect-video bg-gray-100 relative">
                    <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <div class="p-4">
                    <span class="text-xs text-primary font-medium">{{ post.category }}</span>
                    <h3 class="font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors">
                      {{ post.title }}
                    </h3>
                    <p class="text-sm text-gray-500 mt-2 line-clamp-2">{{ post.excerpt }}</p>
                    <div class="flex items-center gap-2 mt-3 text-xs text-gray-400">
                      <span>{{ post.date }}</span>
                      <span>•</span>
                      <span>{{ post.author }}</span>
                    </div>
                  </div>
                </AppCard>
              </router-link>
            </div>

            <!-- Pagination -->
            <div class="mt-12">
              <AppPagination v-model:current-page="currentPage" :total-pages="10" />
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Categories -->
            <AppCard>
              <h3 class="font-bold text-gray-900 mb-4">Danh mục</h3>
              <ul class="space-y-2">
                <li v-for="cat in blogStore.categories" :key="cat.id">
                  <router-link
                    :to="`/blog?category=${cat.slug}`"
                    class="text-gray-600 hover:text-primary transition-colors"
                  >
                    {{ cat.name }}
                  </router-link>
                </li>
              </ul>
            </AppCard>

            <!-- Recent Posts -->
            <AppCard>
              <h3 class="font-bold text-gray-900 mb-4">Bài viết gần đây</h3>
              <ul class="space-y-3">
                <li v-for="post in posts.slice(0, 3)" :key="post.id">
                  <router-link
                    :to="`/blog/${post.slug}`"
                    class="text-sm text-gray-600 hover:text-primary transition-colors line-clamp-2"
                  >
                    {{ post.title }}
                  </router-link>
                </li>
              </ul>
            </AppCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
