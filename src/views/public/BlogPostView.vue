<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import { useBlogStore } from '@/stores'

const route = useRoute()
const slug = route.params.slug as string

const blogStore = useBlogStore()

const post = {
  title: 'Kinh nghiệm dịch thuật hiệu quả cho người mới bắt đầu',
  excerpt: 'Chia sẻ kinh nghiệm dịch thuật từ các chuyên gia hàng đầu trong lĩnh vực...',
  content: `
    <p>Dịch thuật là một kỹ năng quan trọng trong thời đại toàn cầu hóa hiện nay. Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, việc hiểu và áp dụng các kỹ thuật dịch thuật đúng cách sẽ giúp bạn nâng cao chất lượng công việc.</p>

    <h2>1. Hiểu rõ ngữ cảnh của văn bản</h2>
    <p>Trước khi bắt đầu dịch, hãy dành thời gian để hiểu rõ ngữ cảnh của văn bản. Văn bản này dùng cho mục đích gì? Đối tượng đọc là ai? Phong cách viết phù hợp là gì?</p>

    <h2>2. Nắm vững cả hai ngôn ngữ</h2>
    <p>Để dịch tốt, bạn cần nắm vững không chỉ ngôn ngữ nguồn mà còn cả ngôn ngữ đích. Hãy liên tục cải thiện vốn từ vựng và ngữ pháp của cả hai ngôn ngữ.</p>

    <h2>3. Sử dụng công cụ hỗ trợ</h2>
    <p>Các công cụ dịch thuật hỗ trợ như CAT Tools, từ điển chuyên ngành có thể giúp bạn làm việc hiệu quả hơn. Tuy nhiên, đừng quá phụ thuộc vào chúng.</p>

    <h2>4. Kiểm tra và hiệu đính</h2>
    <p>Sau khi dịch xong, hãy dành thời gian kiểm tra lại. Đọc bản dịch thành tiếng to để phát hiện các lỗi ngữ pháp và diễn đạt không tự nhiên.</p>

    <h2>Kết luận</h2>
    <p>Dịch thuật là một quá trình học hỏi liên tục. Càng luyện tập, bạn càng cải thiện được kỹ năng của mình.</p>
  `,
  category: 'Chia sẻ – kinh nghiệm',
  date: '2026-01-20',
  author: { name: 'Nguyễn Văn A', avatar: '' },
  tags: ['dịch thuật', 'kinh nghiệm', 'học tập'],
  views: 1234
}

const relatedPosts = [
  { id: '1', slug: 'thuat-ngu-y-te', title: 'Thuật ngữ y tế thường dùng', category: 'Thuật ngữ chuyên ngành' },
  { id: '2', slug: 'download-tu-dien', title: 'Download từ điển chuyên ngành', category: 'Download tài liệu' },
  { id: '3', slug: 'phan-mem-ho-tro', title: 'Phần mềm hỗ trợ dịch thuật', category: 'Phần mềm' }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gray-50 py-8">
      <div class="container">
        <AppBreadcrumb
          :items="[
            { label: 'Blog', to: '/blog' },
            { label: post.title }
          ]"
        />
      </div>
    </section>

    <!-- Article -->
    <article class="section">
      <div class="container">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <header class="mb-8">
              <span class="text-primary font-medium">{{ post.category }}</span>
              <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{{ post.title }}</h1>
              <p class="text-lg text-gray-600 mb-6">{{ post.excerpt }}</p>

              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.author.name }}</span>
                <span>•</span>
                <span>{{ post.views }} lượt xem</span>
              </div>
            </header>

            <!-- Thumbnail -->
            <div class="aspect-video bg-gray-100 rounded-2xl mb-8 flex items-center justify-center">
              <svg class="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>

            <!-- Content -->
            <div class="prose prose-lg max-w-none">
              <div v-html="post.content" class="blog-content"></div>
            </div>

            <!-- Tags -->
            <div class="mt-8 pt-8 border-t">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Share -->
            <div class="mt-8 pt-8 border-t">
              <h3 class="font-medium text-gray-900 mb-4">Chia sẻ bài viết</h3>
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" class="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-1.994-.001-3.873.584-5.482 1.583l-3.736-.98 1.022 3.71c-1.061 1.67-1.639 3.624-1.641 5.68-.003 5.453 4.437 9.887 9.894 9.887 1.998-.001 3.873-.583 5.479-1.575l3.821.998-1.022-3.719z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="space-y-6">
            <!-- Author -->
            <div class="bg-white rounded-xl p-6 shadow-card">
              <h3 class="font-bold text-gray-900 mb-4">Tác giả</h3>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ post.author.name }}</p>
                  <p class="text-sm text-gray-500">Biên dịch viên chuyên nghiệp</p>
                </div>
              </div>
            </div>

            <!-- Table of Contents -->
            <div class="bg-white rounded-xl p-6 shadow-card">
              <h3 class="font-bold text-gray-900 mb-4">Mục lục</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-600 hover:text-primary text-sm">1. Hiểu rõ ngữ cảnh</a></li>
                <li><a href="#" class="text-gray-600 hover:text-primary text-sm">2. Nắm vững ngôn ngữ</a></li>
                <li><a href="#" class="text-gray-600 hover:text-primary text-sm">3. Sử dụng công cụ</a></li>
                <li><a href="#" class="text-gray-600 hover:text-primary text-sm">4. Kiểm tra lại</a></li>
              </ul>
            </div>

            <!-- Related Posts -->
            <div class="bg-white rounded-xl p-6 shadow-card">
              <h3 class="font-bold text-gray-900 mb-4">Bài viết liên quan</h3>
              <ul class="space-y-3">
                <li v-for="related in relatedPosts" :key="related.id">
                  <router-link
                    :to="`/blog/${related.slug}`"
                    class="block group"
                  >
                    <span class="text-xs text-primary">{{ related.category }}</span>
                    <p class="text-gray-900 group-hover:text-primary transition-colors text-sm font-medium">
                      {{ related.title }}
                    </p>
                  </router-link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-4">Cần dịch thuật chuyên nghiệp?</h2>
        <p class="text-white/80 mb-8">Liên hệ ngay để nhận tư vấn và báo giá miễn phí</p>
        <router-link to="/lien-he" class="btn-white inline-block">
          Liên hệ ngay
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.blog-content :deep(p) {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1rem;
}
</style>
