import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArchivedView from '../views/ArchivedView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/archived',
    name: 'archived',
    component: ArchivedView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
