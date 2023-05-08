import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/page1',
      name: 'Page1',
      component: () => import('../views/Page1.vue')
    },
    {
      path: '/page2',
      name: 'Page2',
      component: () => import('../views/Page2.vue')
    },
    {
      path: '/props',
      name: 'Props',
      component: () => import('../views/Props.vue')
    }
  ]
})

export default router
