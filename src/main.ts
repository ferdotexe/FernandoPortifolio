import './style.css'
import { portfolioData } from './data/portfolio-data'
import { initFloatingMenu } from './features/floating-menu'
import { initProjectsCarousel } from './features/projects-carousel'
import { renderApp } from './ui/render-app'

const appRoot = document.querySelector<HTMLDivElement>('#app')

if (appRoot) {
  appRoot.innerHTML = renderApp(portfolioData)
  initProjectsCarousel(portfolioData.projects.length > 3)
  initFloatingMenu()
}
