import { createHead } from '@vueuse/head'
import type { App } from 'vue'

const head = createHead()

function setupHead(app: App) {
  app.use(head)
}

export { setupHead }
