import { setupStore } from './modules/pinia'
import { setupRouter } from './modules/router'
import { setupHead } from './modules/head'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'virtual:uno.css'

const app = createApp(App)
setupStore(app)
setupRouter(app)
setupHead(app)
app.mount('#app')
