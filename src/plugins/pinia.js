import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

function setupStore(app) {
  const store = createPinia()
  store.use(piniaPluginPersistedState)
  app.use(store)
}

export { setupStore }
