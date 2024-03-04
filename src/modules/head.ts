import type { App } from 'vue'

const head = createHead()

export function setupHead(app: App) {
  app.use(head)
}
