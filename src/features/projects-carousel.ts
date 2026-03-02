export const initProjectsCarousel = (shouldEnable: boolean) => {
  if (!shouldEnable) return

  const track = document.querySelector<HTMLDivElement>('#projects-track')
  const prevButton = document.querySelector<HTMLButtonElement>('#projects-prev')
  const nextButton = document.querySelector<HTMLButtonElement>('#projects-next')

  const scrollAmount = 320

  prevButton?.addEventListener('click', () => {
    track?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  })

  nextButton?.addEventListener('click', () => {
    track?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  })
}
