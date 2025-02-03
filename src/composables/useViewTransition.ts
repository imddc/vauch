import { ref } from 'vue'

/**
 * @description viewTransition
 */
export function useViewTransition(fn: (...args: any[]) => void, readyCb?: (...args: any[]) => void) {
  const isViewTransition = ref(false)

  let viewTransitionFinish: undefined | (() => void)
  let viewTransitionAbort: undefined | (() => void)

  const supportViewTransition
    = document !== undefined && 'startViewTransition' in document

  // 不支持则啥也不做
  if (!supportViewTransition) {
    isViewTransition.value = false
    console.warn(
      'View transition is not supported in your browser, fallback to normal transition.',
    )
    return
  }

  isViewTransition.value = true

  const promise = new Promise<void>((resolve, reject) => {
    viewTransitionFinish = resolve
    viewTransitionAbort = reject
  })

  const transition = document.startViewTransition(() => {
    try {
      fn()
      viewTransitionFinish?.()
    } catch (e) {
      console.log(e)
      viewTransitionAbort?.()
    }
    return promise
  })

  transition.ready.then(() => {
    if (readyCb) {
      readyCb()
    }
  })

  transition.finished.then(() => {
    viewTransitionFinish = undefined
    viewTransitionAbort = undefined
  })

  return isViewTransition
}
