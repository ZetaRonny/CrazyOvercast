import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import log from '../views/log.vue'
//import Register from '../views/support.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/log',
    name: 'log',
    component: () => import('../views/log.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router