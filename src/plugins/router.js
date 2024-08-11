import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

function setupRouter(app) {
  app.use(router)
}

export { setupRouter }
