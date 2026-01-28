import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia

// Re-export all stores
export * from './services'
export * from './projects'
export * from './clients'
export * from './team'
export * from './blog'
export * from './pricing'
export * from './quotes'
export * from './settings'
export * from './auth'
