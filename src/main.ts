import App from './App.vue'
import { setupHead } from './plugins/head'
import { setupStore } from './plugins/pinia'
import { setupRouter } from './plugins/router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'virtual:uno.css'

const app = createApp(App)
setupStore(app)
setupRouter(app)
setupHead(app)
app.mount('#app')
