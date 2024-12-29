import type { App } from 'vue'
import { createHead } from '@vueuse/head'

const head = createHead()

function setupHead(app: App) {
  app.use(head)
}

export { setupHead }
