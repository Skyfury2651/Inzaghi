import type { RouteRecordRaw } from 'vue-router'

const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/public/HomeView.vue'),
        meta: { title: 'Dịch Thuật Phương Đông - Dịch vụ dịch thuật chuyên nghiệp' }
      },
      {
        path: 've-chung-toi',
        name: 'about',
        component: () => import('@/views/public/AboutView.vue'),
        meta: { title: 'Về chúng tôi - Dịch Thuật Phương Đông' }
      },
      // Translation Services
      {
        path: 'dich-thuat',
        name: 'translation',
        component: () => import('@/views/public/TranslationView.vue'),
        meta: { title: 'Dịch thuật - Dịch Thuật Phương Đông' }
      },
      {
        path: 'dich-thuat/:slug',
        name: 'translation-detail',
        component: () => import('@/views/public/ServiceDetailView.vue'),
        meta: { title: 'Dịch thuật' }
      },
      // Interpretation Services
      {
        path: 'phien-dich',
        name: 'interpretation',
        component: () => import('@/views/public/InterpretationView.vue'),
        meta: { title: 'Phiên dịch - Dịch Thuật Phương Đông' }
      },
      {
        path: 'phien-dich/:slug',
        name: 'interpretation-detail',
        component: () => import('@/views/public/ServiceDetailView.vue'),
        meta: { title: 'Phiên dịch' }
      },
      // Pricing
      {
        path: 'bao-gia-dich-thuat',
        name: 'pricing-translation',
        component: () => import('@/views/public/PricingTranslationView.vue'),
        meta: { title: 'Báo giá dịch thuật - Dịch Thuật Phương Đông' }
      },
      {
        path: 'bao-gia-phien-dich',
        name: 'pricing-interpretation',
        component: () => import('@/views/public/PricingInterpretationView.vue'),
        meta: { title: 'Báo giá phiên dịch - Dịch Thuật Phương Đông' }
      },
      // Visa
      {
        path: 'visa',
        name: 'visa',
        component: () => import('@/views/public/VisaView.vue'),
        meta: { title: 'Dịch vụ Visa - Dịch Thuật Phương Đông' }
      },
      {
        path: 'visa/:slug',
        name: 'visa-detail',
        component: () => import('@/views/public/VisaDetailView.vue'),
        meta: { title: 'Visa' }
      },
      // Projects
      {
        path: 'du-an',
        name: 'projects',
        component: () => import('@/views/public/ProjectsView.vue'),
        meta: { title: 'Dự án - Dịch Thuật Phương Đông' }
      },
      {
        path: 'du-an/:slug',
        name: 'project-detail',
        component: () => import('@/views/public/ProjectDetailView.vue'),
        meta: { title: 'Dự án' }
      },
      // Clients
      {
        path: 'khach-hang',
        name: 'clients',
        component: () => import('@/views/public/ClientsView.vue'),
        meta: { title: 'Khách hàng - Dịch Thuật Phương Đông' }
      },
      // Team
      {
        path: 'nhan-su',
        name: 'team',
        component: () => import('@/views/public/TeamView.vue'),
        meta: { title: 'Nhân sự - Dịch Thuật Phương Đông' }
      },
      {
        path: 'nhan-su/:slug',
        name: 'team-profile',
        component: () => import('@/views/public/TeamProfileView.vue'),
        meta: { title: 'Nhân sự' }
      },
      // Recruitment
      {
        path: 'tuyen-dung',
        name: 'recruitment',
        component: () => import('@/views/public/RecruitmentView.vue'),
        meta: { title: 'Tuyển dụng - Dịch Thuật Phương Đông' }
      },
      // Blog
      {
        path: 'blog',
        name: 'blog',
        component: () => import('@/views/public/BlogView.vue'),
        meta: { title: 'Blog - Dịch Thuật Phương Đông' }
      },
      {
        path: 'blog/:slug',
        name: 'blog-post',
        component: () => import('@/views/public/BlogPostView.vue'),
        meta: { title: 'Blog' }
      },
      // Languages
      {
        path: 'ngon-ngu-dich',
        name: 'languages',
        component: () => import('@/views/public/LanguagesView.vue'),
        meta: { title: 'Ngôn ngữ dịch - Dịch Thuật Phương Đông' }
      },
      {
        path: 'dich-thuat-tieng-:lang',
        name: 'language-detail',
        component: () => import('@/views/public/LanguageDetailView.vue'),
        meta: { title: 'Dịch thuật' }
      },
      // Contact
      {
        path: 'lien-he',
        name: 'contact',
        component: () => import('@/views/public/ContactView.vue'),
        meta: { title: 'Liên hệ - Dịch Thuật Phương Đông' }
      }
    ]
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/public/NotFoundView.vue'),
    meta: { title: 'Không tìm thấy trang' }
  }
]

export default publicRoutes
