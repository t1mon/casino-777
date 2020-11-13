import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WheelLV',
    component: () => import('../views/WheelLV.vue')
  },
  {
    path: '/lv/',
    name: 'WheelLV2',
    component: () => import('../views/WheelLV.vue')
  },
  {
    path: '/ru',
    name: 'WheelRU',
    component: () => import('../views/WheelRU.vue')
  },
  {
    path: '/en',
    name: 'WheelEN',
    component: () => import('../views/WheelEN.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
