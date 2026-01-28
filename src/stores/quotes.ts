import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { QuoteRequest, PaginatedResponse } from '@/types'

export const useQuotesStore = defineStore('quotes', () => {
  const quotes = ref<QuoteRequest[]>([])
  const currentQuote = ref<QuoteRequest | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const pagination = ref({
    page: 1,
    perPage: 20,
    total: 0,
    totalPages: 0
  })

  async function fetchQuotes(status?: string, page = 1) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch quotes'
    } finally {
      loading.value = false
    }
  }

  async function submitQuote(data: Omit<QuoteRequest, 'id' | 'status' | 'notes' | 'createdAt'>) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
      return { success: true }
    } catch (e) {
      error.value = 'Failed to submit quote'
      return { success: false }
    } finally {
      loading.value = false
    }
  }

  async function updateQuoteStatus(id: string, status: QuoteRequest['status'], notes?: string) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to update quote status'
    } finally {
      loading.value = false
    }
  }

  function setQuotes(data: PaginatedResponse<QuoteRequest>) {
    quotes.value = data.data
    pagination.value = {
      page: data.page,
      perPage: data.perPage,
      total: data.total,
      totalPages: data.totalPages
    }
  }

  return {
    quotes,
    currentQuote,
    loading,
    error,
    pagination,
    fetchQuotes,
    submitQuote,
    updateQuoteStatus,
    setQuotes
  }
})
