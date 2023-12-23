import { setupStore } from './modules/pinia'
import { setupRouter } from './modules/router'

import './style.css'
import App from './App.vue'

const app = createApp(App)
setupStore(app)
setupRouter(app)
app.mount('#app')
