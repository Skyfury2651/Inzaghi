import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TranslationPricing, InterpretationPricing } from '@/types'

export const usePricingStore = defineStore('pricing', () => {
  const translationPricing = ref<TranslationPricing[]>([])
  const interpretationPricing = ref<InterpretationPricing[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Default translation pricing data
  const defaultTranslationPricing: TranslationPricing[] = [
    { id: '1', sourceLanguage: 'Tiếng Anh', targetLanguage: 'Tiếng Việt', standardPrice: 50000, specializedPrice: 65000, notarizationFee: 30000 },
    { id: '2', sourceLanguage: 'Tiếng Việt', targetLanguage: 'Tiếng Anh', standardPrice: 55000, specializedPrice: 70000, notarizationFee: 30000 },
    { id: '3', sourceLanguage: 'Tiếng Nhật', targetLanguage: 'Tiếng Việt', standardPrice: 85000, specializedPrice: 105000, notarizationFee: 40000 },
    { id: '4', sourceLanguage: 'Tiếng Việt', targetLanguage: 'Tiếng Nhật', standardPrice: 90000, specializedPrice: 110000, notarizationFee: 40000 },
    { id: '5', sourceLanguage: 'Tiếng Hàn', targetLanguage: 'Tiếng Việt', standardPrice: 80000, specializedPrice: 100000, notarizationFee: 40000 },
    { id: '6', sourceLanguage: 'Tiếng Việt', targetLanguage: 'Tiếng Hàn', standardPrice: 85000, specializedPrice: 105000, notarizationFee: 40000 },
    { id: '7', sourceLanguage: 'Tiếng Trung', targetLanguage: 'Tiếng Việt', standardPrice: 65000, specializedPrice: 85000, notarizationFee: 40000 },
    { id: '8', sourceLanguage: 'Tiếng Việt', targetLanguage: 'Tiếng Trung', standardPrice: 70000, specializedPrice: 90000, notarizationFee: 40000 },
    { id: '9', sourceLanguage: 'Tiếng Pháp', targetLanguage: 'Tiếng Việt', standardPrice: 75000, specializedPrice: 95000, notarizationFee: 40000 },
    { id: '10', sourceLanguage: 'Tiếng Đức', targetLanguage: 'Tiếng Việt', standardPrice: 85000, specializedPrice: 110000, notarizationFee: 40000 },
    { id: '11', sourceLanguage: 'Tiếng Nga', targetLanguage: 'Tiếng Việt', standardPrice: 90000, specializedPrice: 115000, notarizationFee: 40000 }
  ]

  // Default interpretation pricing data
  const defaultInterpretationPricing: InterpretationPricing[] = [
    { id: '1', language: 'Tiếng Anh', level1: { min: 30, max: 70, currency: 'USD' }, level2: { min: 80, max: 120, currency: 'USD' }, level3: { min: 200, max: 300, currency: 'USD' } },
    { id: '2', language: 'Tiếng Trung', level1: { min: 60, max: 100, currency: 'USD' }, level2: { min: 110, max: 150, currency: 'USD' }, level3: { min: 200, max: 300, currency: 'USD' } },
    { id: '3', language: 'Tiếng Nhật', level1: { min: 150, max: 180, currency: 'USD' }, level2: { min: 170, max: 200, currency: 'USD' }, level3: { min: 200, max: 350, currency: 'USD' } },
    { id: '4', language: 'Tiếng Hàn', level1: { min: 150, max: 180, currency: 'USD' }, level2: { min: 170, max: 200, currency: 'USD' }, level3: { min: 200, max: 230, currency: 'USD' } },
    { id: '5', language: 'Tiếng Pháp', level1: { min: 60, max: 100, currency: 'USD' }, level2: { min: 130, max: 170, currency: 'USD' }, level3: { min: 250, max: 300, currency: 'USD' } },
    { id: '6', language: 'Tiếng Tây Ban Nha/Bồ Đào Nha/Ý', level1: { min: 200, max: 230, currency: 'USD' }, level2: { min: 230, max: 250, currency: 'USD' }, level3: { min: 250, max: 350, currency: 'USD' } },
    { id: '7', language: 'Tiếng Thái/Lào/Khmer', level1: { min: 170, max: 200, currency: 'USD' }, level2: { min: 200, max: 230, currency: 'USD' }, level3: { min: 230, max: 260, currency: 'USD' } },
    { id: '8', language: 'Tiếng Indonesia/Malaysia/Philippines', level1: { min: 200, max: 230, currency: 'USD' }, level2: { min: 230, max: 260, currency: 'USD' }, level3: { min: 300, max: 450, currency: 'USD' } }
  ]

  async function fetchTranslationPricing() {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
      translationPricing.value = defaultTranslationPricing
    } catch (e) {
      error.value = 'Failed to fetch translation pricing'
    } finally {
      loading.value = false
    }
  }

  async function fetchInterpretationPricing() {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
      interpretationPricing.value = defaultInterpretationPricing
    } catch (e) {
      error.value = 'Failed to fetch interpretation pricing'
    } finally {
      loading.value = false
    }
  }

  return {
    translationPricing,
    interpretationPricing,
    loading,
    error,
    fetchTranslationPricing,
    fetchInterpretationPricing
  }
})
