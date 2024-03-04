import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory()
})

function setupRouter(app: App) {
  app.use(router)
}

export { setupRouter }
