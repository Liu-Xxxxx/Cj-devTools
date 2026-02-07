import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/homePage.vue'
import Page1 from '../pages/page_1.vue'
import Page2 from '../pages/page_2.vue'
import Page3 from '../pages/page_3.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
