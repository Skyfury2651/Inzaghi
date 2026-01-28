import { createApp } from 'vue'
import pinia from './stores'
import router from './router'
import App from './App.vue'
import './assets/styles/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

// Update page title on route change
router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Dịch Thuật Phương Đông'
})

app.mount('#app')
