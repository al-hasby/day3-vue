import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Service from '../views/service.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  {path: '/service',name:'Service',component:Service}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router