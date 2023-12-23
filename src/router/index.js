import { createRouter, createWebHistory } from 'vue-router'
import route from "./routes";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route
})

export default router
