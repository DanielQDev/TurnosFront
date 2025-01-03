import isAuthenticatedGuard from '@/modules/auth/guards/authenticated.guard'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login', //{name: 'login}
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/modules/auth/pages/SignIn.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/modules/auth/pages/SignUp.vue')
        }
      ]
    },
    {
      path: '/dashboard',
      redirect: '/home',
      component: () => import('@/modules/dashboard/layouts/DashboardLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          beforeEnter: [isAuthenticatedGuard],
          component: () => import('@/modules/dashboard/pages/HomePage.vue')
        },
        {
          path: '/shifts',
          name: 'shifts',
          beforeEnter: [isAuthenticatedGuard],
          component: () => import('@/modules/dashboard/pages/ShiftsPage.vue')
        },
        {
          path: '/availability',
          name: 'availability',
          beforeEnter: [isAuthenticatedGuard],
          component: () => import('@/modules/dashboard/pages/AvailabilityPage.vue')
        }
      ]
    }
  ]
})

export default router
