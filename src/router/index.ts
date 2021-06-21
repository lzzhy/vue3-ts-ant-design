import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from '@/views/index.vue'
import axios from '@/views/axios.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: '/',
        name: 'axios',
        component: axios
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
