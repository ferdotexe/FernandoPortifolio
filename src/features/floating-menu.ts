export const initFloatingMenu = () => {
  const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle')
  const menuPanel = document.querySelector<HTMLElement>('#menu-panel')
  const menuLinks = Array.from(document.querySelectorAll<HTMLButtonElement>('.menu-link'))

  const setMenuOpen = (isOpen: boolean) => {
    if (!menuPanel || !menuToggle) return

    menuPanel.classList.toggle('hidden', !isOpen)
    menuPanel.classList.toggle('flex', isOpen)
    menuToggle.setAttribute('aria-expanded', String(isOpen))
  }

  menuToggle?.addEventListener('click', () => {
    const isClosed = menuPanel?.classList.contains('hidden') ?? true
    setMenuOpen(isClosed)
  })

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const targetId = link.dataset.target
      if (!targetId) return

      const targetSection = document.getElementById(targetId)
      targetSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    })
  })

  document.addEventListener('click', (event) => {
    const target = event.target as Node
    if (!menuPanel || !menuToggle) return

    const clickedInsideMenu = menuPanel.contains(target) || menuToggle.contains(target)
    if (!clickedInsideMenu) setMenuOpen(false)
  })
}
