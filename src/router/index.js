import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/list/list.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: "about" */ '../views/city/city.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
