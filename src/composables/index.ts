export const isDark = useDark()
export const toggleDark = (e: MouseEvent) => {
  document.documentElement.style.setProperty('--x', e.clientX + 'px')
  document.documentElement.style.setProperty('--y', e.clientY + 'px')

  useViewTransition(() => {
    document.documentElement.classList.toggle('dark')
    useToggle(isDark)()
  })
}
