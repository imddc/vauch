import { createPinia } from 'pinia'
import { App } from 'vue'

const setupStore = (app: App) => {
  const store = createPinia()
  app.use(store)
}

export { setupStore }
