export const isDark = useDark()
export function toggleDark(e: MouseEvent) {
  const toggle = useToggle(isDark)
  document.documentElement.style.setProperty('--x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--y', `${e.clientY}px`)

  useViewTransition(() => {
    toggle()
  })
}
