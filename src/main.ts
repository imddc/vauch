import { createApp } from 'vue'
import App from './App.vue'
import { setupHead, setupStore } from './plugins'
import './styles/main.css'

const app = createApp(App)
setupStore(app)
setupHead(app)
app.mount('#app')
