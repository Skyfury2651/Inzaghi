import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { BlogPost, BlogCategory, PaginatedResponse } from '@/types'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<BlogPost[]>([])
  const currentPost = ref<BlogPost | null>(null)
  const categories = ref<BlogCategory[]>([])
  const selectedCategory = ref<string>('')
  const loading = ref(false)
  const error = ref<string | null>(null)
  const pagination = ref({
    page: 1,
    perPage: 10,
    total: 0,
    totalPages: 0
  })

  const recentPosts = computed(() =>
    [...posts.value]
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 5)
  )

  async function fetchPosts(category?: string, page = 1) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch posts'
    } finally {
      loading.value = false
    }
  }

  async function fetchPostBySlug(slug: string) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch post'
    } finally {
      loading.value = false
    }
  }

  async function fetchCategories() {
    try {
      // TODO: Replace with actual API call
      categories.value = [
        { id: '1', slug: 'chia-se-kinh-nghiem', name: 'Chia sẻ – kinh nghiệm', count: 0 },
        { id: '2', slug: 'thuat-ngu-chuyen-nganh', name: 'Thuật ngữ chuyên ngành', count: 0 },
        { id: '3', slug: 'download-tai-lieu', name: 'Download tài liệu', count: 0 },
        { id: '4', slug: 'phan-mem', name: 'Phần mềm', count: 0 },
        { id: '5', slug: 'tien-ich', name: 'Tiện ích', count: 0 },
        { id: '6', slug: 'tin-tuc-khac', name: 'Tin tức khác', count: 0 }
      ]
    } catch (e) {
      error.value = 'Failed to fetch categories'
    }
  }

  function setPosts(data: PaginatedResponse<BlogPost>) {
    posts.value = data.data
    pagination.value = {
      page: data.page,
      perPage: data.perPage,
      total: data.total,
      totalPages: data.totalPages
    }
  }

  function setCategoryFilter(category: string) {
    selectedCategory.value = category
  }

  return {
    posts,
    currentPost,
    categories,
    selectedCategory,
    loading,
    error,
    pagination,
    recentPosts,
    fetchPosts,
    fetchPostBySlug,
    fetchCategories,
    setPosts,
    setCategoryFilter
  }
})
