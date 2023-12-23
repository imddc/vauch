import { App } from 'vue'

const router = createRouter({
  history: createWebHistory(),
})

const setupRouter = (app: App) => {
  app.use(router)
}

export { setupRouter }
