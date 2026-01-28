import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project, PaginatedResponse } from '@/types'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([])
  const currentProject = ref<Project | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const selectedIndustry = ref<string>('')
  const pagination = ref({
    page: 1,
    perPage: 12,
    total: 0,
    totalPages: 0
  })

  const industries = [
    'Dược, y tế, sức khỏe',
    'Thực phẩm & đồ uống',
    'Giáo dục & Đào tạo',
    'CNTT - Công nghệ cao',
    'Sản xuất công nghiệp',
    'Xây dựng & Bất động sản',
    'Tài chính & Ngân hàng',
    'Du lịch & Khách sạn',
    'Thương mại điện tử',
    'Năng lượng & Môi trường',
    'Giao thông vận tải',
    'Viễn thông',
    'Dệt may & Thời trang',
    'Nông nghiệp',
    'Hàng không',
    'Hàng hải',
    'Pháp lý',
    'Marketing & Quảng cáo',
    'Game & Giải trí',
    'Điện tử & Điện máy',
    'Ô tô & Xe máy',
    'Khác'
  ]

  async function fetchProjects(industry?: string, page = 1) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch projects'
    } finally {
      loading.value = false
    }
  }

  async function fetchProjectBySlug(slug: string) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch project'
    } finally {
      loading.value = false
    }
  }

  function setProjects(data: PaginatedResponse<Project>) {
    projects.value = data.data
    pagination.value = {
      page: data.page,
      perPage: data.perPage,
      total: data.total,
      totalPages: data.totalPages
    }
  }

  function setIndustryFilter(industry: string) {
    selectedIndustry.value = industry
  }

  return {
    projects,
    currentProject,
    loading,
    error,
    pagination,
    industries,
    selectedIndustry,
    fetchProjects,
    fetchProjectBySlug,
    setProjects,
    setIndustryFilter
  }
})
