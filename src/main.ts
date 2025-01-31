import { createApp } from 'vue'
import App from './App.vue'
import { setupHead, setupRouter, setupStore } from './plugins'
import './styles/main.css'

function bootStrap() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  setupHead(app)
  app.mount('#app')
}

bootStrap()
