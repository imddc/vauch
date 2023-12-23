import { App } from 'vue'

const head = createHead()

export const setupHead = (app: App) => {
  app.use(head)
}
