import { setupStore } from './modules/pinia'
import { setupRouter } from './modules/router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'virtual:uno.css'

const app = createApp(App)
setupStore(app)
setupRouter(app)
app.mount('#app')
