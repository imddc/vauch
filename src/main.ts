import { createApp } from 'vue'
import App from './App.vue'
import { setupHead, setupRouter, setupStore } from './plugins'
import './styles/main.css'

const app = createApp(App)
setupRouter(app)
setupStore(app)
setupHead(app)
app.mount('#app')
