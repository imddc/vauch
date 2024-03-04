/**
 * @description viewTransition
 */
export function useViewTransition(fn: (...args: any[]) => void) {
  const isViewTransition = ref(false)

  let viewTransitionFinish: undefined | (() => void)
  let viewTransitionAbort: undefined | (() => void)

  const supportViewTransition =
    document !== undefined && 'startViewTransition' in document

  // 不支持则啥也不做
  if (!supportViewTransition) {
    isViewTransition.value = false
    console.warn(
      'View transition is not supported in your browser, fallback to normal transition.'
    )
    return
  }

  isViewTransition.value = true

  const promise = new Promise<void>((resolve, reject) => {
    viewTransitionFinish = resolve
    viewTransitionAbort = reject
  })

  // @ts-expect-error cause this api is not accepted by default
  const transition = document.startViewTransition(() => {
    try {
      fn()
      viewTransitionFinish?.()
    } catch (e) {
      viewTransitionAbort?.()
    }
    return promise
  })

  transition.finished.then(() => {
    viewTransitionFinish = undefined
    viewTransitionAbort = undefined
  })

  return isViewTransition
}
