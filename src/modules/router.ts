import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(),
})

const setupRouter = (app: App) => {
  app.use(router)
}

export { setupRouter }
