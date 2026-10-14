import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import log from '@/views/log.vue'
import about from '@/views/about.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/log',
    name: 'log',
    component: log,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router