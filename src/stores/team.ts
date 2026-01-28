import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { TeamMember } from '@/types'

export const useTeamStore = defineStore('team', () => {
  const members = ref<TeamMember[]>([])
  const currentMember = ref<TeamMember | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const hanoiMembers = computed(() =>
    members.value.filter(m => m.location === 'hanoi' && m.status === 'active')
  )

  const hcmcMembers = computed(() =>
    members.value.filter(m => m.location === 'hcmc' && m.status === 'active')
  )

  async function fetchMembers() {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch team members'
    } finally {
      loading.value = false
    }
  }

  async function fetchMemberBySlug(slug: string) {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch team member'
    } finally {
      loading.value = false
    }
  }

  function setMembers(data: TeamMember[]) {
    members.value = data
  }

  return {
    members,
    currentMember,
    loading,
    error,
    hanoiMembers,
    hcmcMembers,
    fetchMembers,
    fetchMemberBySlug,
    setMembers
  }
})
