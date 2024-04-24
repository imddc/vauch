import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

function setupStore(app: App) {
  const store = createPinia()
  store.use(piniaPluginPersistedState)
  app.use(store)
}

export { setupStore }
