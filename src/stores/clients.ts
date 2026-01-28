import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Client } from '@/types'

export const useClientsStore = defineStore('clients', () => {
  const clients = ref<Client[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const featuredClients = computed(() =>
    clients.value.filter(c => c.featured).slice(0, 6)
  )

  const clientsByIndustry = computed(() => {
    const grouped: Record<string, Client[]> = {}
    clients.value.forEach(client => {
      if (!grouped[client.industry]) {
        grouped[client.industry] = []
      }
      grouped[client.industry]!.push(client)
    })
    return grouped
  })

  async function fetchClients() {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch clients'
    } finally {
      loading.value = false
    }
  }

  function setClients(data: Client[]) {
    clients.value = data
  }

  return {
    clients,
    loading,
    error,
    featuredClients,
    clientsByIndustry,
    fetchClients,
    setClients
  }
})
