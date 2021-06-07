import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./home.vue')
  },
  {
    path: '/about',
    component: () => import('./about.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
