import { createHead } from '@vueuse/head'

const head = createHead()

function setupHead(app) {
  app.use(head)
}

export { setupHead }
