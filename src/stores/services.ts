import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Service, PaginatedResponse } from '@/types'

export const useServicesStore = defineStore('services', () => {
  const services = ref<Service[]>([])
  const currentService = ref<Service | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const pagination = ref({
    page: 1,
    perPage: 12,
    total: 0,
    totalPages: 0
  })

  const translationServices = computed(() =>
    services.value.filter(s => s.type === 'translation')
  )

  const interpretationServices = computed(() =>
    services.value.filter(s => s.type === 'interpretation')
  )

  const visaServices = computed(() =>
    services.value.filter(s => s.type === 'visa')
  )

  async function fetchServices(type?: string, page = 1) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
      // const response = await api.services.getAll({ type, page })
      // services.value = response.data
      // pagination.value = response.pagination
    } catch (e) {
      error.value = 'Failed to fetch services'
    } finally {
      loading.value = false
    }
  }

  async function fetchServiceBySlug(slug: string) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
      // const response = await api.services.getBySlug(slug)
      // currentService.value = response.data
    } catch (e) {
      error.value = 'Failed to fetch service'
    } finally {
      loading.value = false
    }
  }

  function setServices(data: PaginatedResponse<Service>) {
    services.value = data.data
    pagination.value = {
      page: data.page,
      perPage: data.perPage,
      total: data.total,
      totalPages: data.totalPages
    }
  }

  return {
    services,
    currentService,
    loading,
    error,
    pagination,
    translationServices,
    interpretationServices,
    visaServices,
    fetchServices,
    fetchServiceBySlug,
    setServices
  }
})
