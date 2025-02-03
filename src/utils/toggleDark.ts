import { useDark, useToggle } from '@vueuse/core'
import { useViewTransition } from '~/composables/useViewTransition'

const isDark = useDark()
export function toggleDark(e: MouseEvent) {
  const toggle = useToggle(isDark)

  useViewTransition(
    () => {
      toggle()
    },
    () => {
      const { clientX, clientY } = e
      const radius = Math.hypot(
        Math.max(clientX, innerWidth - clientX),
        Math.max(clientY, innerHeight - clientY),
      )
      const clipPath = [
        `circle(0% at ${clientX}px ${clientY}px)`,
        `circle(${radius}px at ${clientX}px ${clientY}px)`,
      ]
      const isDark = document.documentElement.classList.contains('dark')
      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath.reverse() : clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    },
  )
}
