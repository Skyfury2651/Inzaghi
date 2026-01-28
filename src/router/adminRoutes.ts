import type { RouteRecordRaw } from 'vue-router'

const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: () => import('@/components/layout/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: () => import('@/views/admin/DashboardView.vue'),
        meta: { title: 'Dashboard - Admin' }
      },
      // Services Management
      {
        path: 'services',
        name: 'admin-services',
        component: () => import('@/views/admin/services/ServiceListView.vue'),
        meta: { title: 'Quản lý dịch vụ - Admin' }
      },
      {
        path: 'services/create',
        name: 'admin-service-create',
        component: () => import('@/views/admin/services/ServiceEditView.vue'),
        meta: { title: 'Thêm dịch vụ - Admin' }
      },
      {
        path: 'services/:id/edit',
        name: 'admin-service-edit',
        component: () => import('@/views/admin/services/ServiceEditView.vue'),
        meta: { title: 'Sửa dịch vụ - Admin' }
      },
      // Projects Management
      {
        path: 'projects',
        name: 'admin-projects',
        component: () => import('@/views/admin/projects/ProjectListView.vue'),
        meta: { title: 'Quản lý dự án - Admin' }
      },
      {
        path: 'projects/create',
        name: 'admin-project-create',
        component: () => import('@/views/admin/projects/ProjectEditView.vue'),
        meta: { title: 'Thêm dự án - Admin' }
      },
      {
        path: 'projects/:id/edit',
        name: 'admin-project-edit',
        component: () => import('@/views/admin/projects/ProjectEditView.vue'),
        meta: { title: 'Sửa dự án - Admin' }
      },
      // Clients Management
      {
        path: 'clients',
        name: 'admin-clients',
        component: () => import('@/views/admin/clients/ClientListView.vue'),
        meta: { title: 'Quản lý khách hàng - Admin' }
      },
      {
        path: 'clients/create',
        name: 'admin-client-create',
        component: () => import('@/views/admin/clients/ClientEditView.vue'),
        meta: { title: 'Thêm khách hàng - Admin' }
      },
      {
        path: 'clients/:id/edit',
        name: 'admin-client-edit',
        component: () => import('@/views/admin/clients/ClientEditView.vue'),
        meta: { title: 'Sửa khách hàng - Admin' }
      },
      // Team Management
      {
        path: 'team',
        name: 'admin-team',
        component: () => import('@/views/admin/team/TeamListView.vue'),
        meta: { title: 'Quản lý nhân sự - Admin' }
      },
      {
        path: 'team/create',
        name: 'admin-team-create',
        component: () => import('@/views/admin/team/TeamEditView.vue'),
        meta: { title: 'Thêm nhân sự - Admin' }
      },
      {
        path: 'team/:id/edit',
        name: 'admin-team-edit',
        component: () => import('@/views/admin/team/TeamEditView.vue'),
        meta: { title: 'Sửa nhân sự - Admin' }
      },
      // Blog Management
      {
        path: 'blog',
        name: 'admin-blog',
        component: () => import('@/views/admin/blog/PostListView.vue'),
        meta: { title: 'Quản lý bài viết - Admin' }
      },
      {
        path: 'blog/create',
        name: 'admin-post-create',
        component: () => import('@/views/admin/blog/PostEditView.vue'),
        meta: { title: 'Thêm bài viết - Admin' }
      },
      {
        path: 'blog/:id/edit',
        name: 'admin-post-edit',
        component: () => import('@/views/admin/blog/PostEditView.vue'),
        meta: { title: 'Sửa bài viết - Admin' }
      },
      // Pricing Management
      {
        path: 'pricing',
        name: 'admin-pricing',
        component: () => import('@/views/admin/pricing/PricingEditView.vue'),
        meta: { title: 'Quản lý bảng giá - Admin' }
      },
      // Quote Requests
      {
        path: 'quotes',
        name: 'admin-quotes',
        component: () => import('@/views/admin/quotes/QuoteListView.vue'),
        meta: { title: 'Yêu cầu báo giá - Admin' }
      },
      // Settings
      {
        path: 'settings',
        name: 'admin-settings',
        component: () => import('@/views/admin/settings/SettingsView.vue'),
        meta: { title: 'Cài đặt - Admin' }
      },
      // Users
      {
        path: 'users',
        name: 'admin-users',
        component: () => import('@/views/admin/users/UserListView.vue'),
        meta: { title: 'Quản lý người dùng - Admin' }
      },
      {
        path: 'users/create',
        name: 'admin-user-create',
        component: () => import('@/views/admin/users/UserEditView.vue'),
        meta: { title: 'Thêm người dùng - Admin' }
      },
      {
        path: 'users/:id/edit',
        name: 'admin-user-edit',
        component: () => import('@/views/admin/users/UserEditView.vue'),
        meta: { title: 'Sửa người dùng - Admin' }
      }
    ]
  },
  // Admin Login
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('@/views/admin/LoginView.vue'),
    meta: { title: 'Đăng nhập - Admin' }
  }
]

export default adminRoutes
