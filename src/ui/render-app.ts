import type { PortfolioData, PortfolioProject, TechnologyItem } from '../domain/portfolio'
import { icons } from './icons'

const renderMenu = (data: PortfolioData) => `
  <button
    id="menu-toggle"
    type="button"
    aria-label="Abrir menu de navegacao"
    aria-expanded="false"
    class="fixed right-5 top-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#8be9fd]/60 bg-[#1f212b]/85 text-[#8be9fd] backdrop-blur-md transition hover:bg-[#8be9fd]/15"
  >
    ${icons.menu}
  </button>

  <nav
    id="menu-panel"
    class="fixed right-5 top-[4.5rem] z-40 hidden w-56 flex-col gap-1 rounded-2xl border border-white/20 bg-[#282a36]/65 p-3 backdrop-blur-md"
    aria-label="Navegacao por secoes"
  >
    ${data.menu
      .map(
        (item) =>
          `<button type="button" data-target="${item.id}" class="menu-link rounded-lg px-3 py-2 text-left text-sm text-white/85 transition hover:bg-white/10">${item.label}</button>`,
      )
      .join('')}
  </nav>
`

const renderSocialIcon = (name: string) => {
  if (name === 'linkedin') return icons.linkedin
  if (name === 'github') return icons.github
  return ''
}

const renderSocialLinks = (data: PortfolioData) =>
  data.socials
    .map(
      (social) => `
        <a href="${social.url}" target="_blank" rel="noreferrer noopener" aria-label="${social.name} de ${data.fullName}" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#8be9fd]/70 bg-white/10 text-[#8be9fd] transition hover:bg-[#8be9fd]/15">
          ${renderSocialIcon(social.name)}
        </a>
      `,
    )
    .join('')

const toTelHref = (rawPhone: string) => `tel:${rawPhone.replace(/[^\d+]/g, '')}`

const renderHero = (data: PortfolioData) => `
  <section id="hero" class="scroll-mt-24 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
    <div class="w-full rounded-3xl border border-white/15 bg-[#1f212b] p-5 shadow-[0_24px_50px_rgba(0,0,0,0.45)] md:border-0 md:bg-transparent md:p-0 md:shadow-none">
      <div class="flex flex-col items-start gap-6 md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-6">
        <div class="flex flex-col items-center gap-4 self-center md:self-auto md:p-6">
          <div class="h-56 w-56 overflow-hidden rounded-2xl border-4 border-white/70 shadow-2xl md:h-72 md:w-72">
            <img src="${data.photoUrl}" alt="Foto de ${data.fullName}" class="h-full w-full object-cover" />
          </div>
          <div class="flex items-center gap-3">
            ${renderSocialLinks(data)}
          </div>
        </div>

        <div class="space-y-4 text-left md:max-w-xl">
          <h1 class="font-name text-4xl font-extrabold uppercase leading-none md:text-6xl">${data.fullName}</h1>
          <h2 class="font-role text-xl font-medium text-white/90 md:text-2xl">${data.role}</h2>
          <p class="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm">
            ${icons.globe}
            ${data.location}
          </p>
        </div>
      </div>
    </div>
  </section>
`

const renderAbout = (text: string) => `
  <section id="sobre-mim" class="scroll-mt-24 mx-auto w-full max-w-6xl px-6 pb-14">
    <h3 class="font-name text-3xl font-extrabold uppercase leading-none md:text-4xl">SOBRE MIM</h3>
    <div class="mt-5 max-w-4xl">
      <div class="flex items-stretch gap-4 md:gap-5">
        <span aria-hidden="true" class="w-1 shrink-0 rounded-full bg-[#8be9fd]/80"></span>
        <p class="text-lg leading-loose text-white/90 md:text-xl">${text}</p>
      </div>
    </div>
  </section>
`

const renderTechnologyCard = (tech: TechnologyItem) => `
  <div class="group relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#8be9fd]/45 bg-white/[0.04] p-4 transition duration-200 hover:-translate-y-1 hover:border-[#8be9fd] hover:bg-white/[0.1] hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)]">
    <img src="${tech.iconUrl}" alt="${tech.name}" class="h-10 w-10 object-contain" />
    <span class="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-md border border-[#8be9fd]/45 bg-[#1f212b]/95 px-2 py-1 text-xs font-semibold text-[#8be9fd] opacity-0 transition-opacity duration-200 group-hover:opacity-100">${tech.name}</span>
  </div>
`

const renderTechnologies = (technologies: TechnologyItem[]) => `
  <section id="tecnologias" class="scroll-mt-24 mx-auto w-full max-w-6xl px-6 pb-16">
    <h3 class="font-name text-3xl font-extrabold leading-none md:text-4xl">Tecnologias:</h3>
    <div class="mt-6 flex max-w-5xl flex-wrap gap-5">
      ${technologies.map(renderTechnologyCard).join('')}
    </div>
  </section>
`

const renderProjectCard = (project: PortfolioProject) => {
  const tagsMarkup = project.tags
    .map((tag) => `<span class="tag-pill rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide">${tag}</span>`)
    .join('')

  const imageMarkup = project.imageUrl
    ? `<img src="${project.imageUrl}" alt="Preview do projeto ${project.title}" class="h-full w-full object-cover" />`
    : '<span class="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Imagem</span>'

  const repoHref = project.repoUrl.trim() || '#'
  const repoText = project.repoUrl.trim() ? 'Repositório' : 'Repositório (link pendente)'

  return `
    <article class="project-card snap-start shrink-0 rounded-2xl border border-[#8be9fd]/45 bg-white/10 p-5 backdrop-blur-sm w-[min(100%,20rem)] sm:w-[340px]">
      <h4 class="mb-3 text-lg font-bold text-white">${project.title}</h4>
      <div class="mb-4 flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-[#8be9fd]/45 bg-white/5">${imageMarkup}</div>
      <div class="mb-5 flex flex-wrap gap-2">${tagsMarkup}</div>
      <p class="mb-4 text-sm leading-relaxed text-white/80">${project.description}</p>
      <a href="${repoHref}" class="inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline" target="_blank" rel="noreferrer noopener">
        ${icons.github}
        ${repoText}
      </a>
    </article>
  `
}

const renderProjects = (projects: PortfolioProject[]) => {
  const hasArrowControls = projects.length > 3

  return `
    <section id="projetos" class="scroll-mt-24 mx-auto w-full max-w-6xl px-6 pb-20">
      <h3 class="font-name text-3xl font-extrabold uppercase leading-none md:text-4xl">Projetos</h3>
      <div class="relative mt-6 rounded-3xl border border-[#8be9fd]/45 bg-white/[0.04] p-4 md:p-6">
        ${
          hasArrowControls
            ? `<button id="projects-prev" type="button" aria-label="Projeto anterior" class="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#8be9fd]/70 bg-[#282a36]/90 text-[#8be9fd] shadow-lg md:flex">&#8592;</button>
               <button id="projects-next" type="button" aria-label="Proximo projeto" class="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#8be9fd]/70 bg-[#282a36]/90 text-[#8be9fd] shadow-lg md:flex">&#8594;</button>`
            : ''
        }
        <div id="projects-track" class="projects-track flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 py-4">
          ${projects.map(renderProjectCard).join('')}
        </div>
      </div>
    </section>
  `
}

const renderExperienceMarker = (marker: 'green' | 'white') =>
  marker === 'green' ? 'bg-green-400' : 'border border-white/70 bg-white'

const renderExperienceItem = (item: PortfolioData['experiences'][number]) => `
  <span aria-hidden="true" class="relative z-10 mt-1 h-3 w-3 justify-self-center rounded-full ${renderExperienceMarker(item.marker)}"></span>
  <div>
    <p class="text-lg text-white"><span class="font-bold">${item.company}</span> <span class="font-light text-white/85">(${item.period})</span></p>
    <p class="ml-4 mt-2 text-base text-white/85">Cargo: ${item.role}</p>
    <ul class="ml-9 mt-4 list-disc space-y-2 text-white/85">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>
  </div>
`

const renderExperiences = (data: PortfolioData) => `
  <section id="experiencia" class="scroll-mt-24 mx-auto w-full max-w-6xl px-6 pb-24">
    <h3 class="font-name text-3xl font-extrabold leading-none md:text-4xl">Experiencia</h3>
    <div class="mt-6 max-w-4xl">
      <div class="relative grid grid-cols-[20px_1fr] gap-x-4 gap-y-10">
        <span aria-hidden="true" class="absolute left-[10px] top-[10px] bottom-[10px] w-px bg-white/40"></span>
        ${data.experiences.map(renderExperienceItem).join('')}
      </div>
    </div>
  </section>
`

const renderContact = (data: PortfolioData) => `
  <section id="contato" class="scroll-mt-24 mx-auto w-full max-w-6xl px-6 pb-24">
    <h3 class="font-name text-3xl font-extrabold leading-none md:text-4xl">Contato</h3>
    <div class="mt-6 max-w-5xl rounded-2xl border border-[#8be9fd]/45 bg-white/[0.04] px-4 py-3 md:px-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-8">
        <div class="flex items-center gap-3">
          ${icons.email}
          <a href="mailto:${data.contact.email}" class="text-base break-all text-white/90 underline-offset-4 hover:underline">${data.contact.email}</a>
        </div>
        <div class="flex items-center gap-3">
          ${icons.phone}
          <a href="${toTelHref(data.contact.phone)}" class="text-base text-white/90 underline-offset-4 hover:underline">${data.contact.phone}</a>
        </div>
      </div>
    </div>
  </section>
`

const renderFooter = (authorName: string) => `
  <footer class="border-t border-white/10 px-6 py-8">
    <div class="mx-auto w-full max-w-6xl text-center text-sm text-white/75">
      feito com ❤️ por ${authorName}
    </div>
  </footer>
`

export const renderApp = (data: PortfolioData) => `
  <main class="min-h-screen bg-dracula-bg text-white">
    ${renderMenu(data)}
    ${renderHero(data)}
    ${renderAbout(data.aboutText)}
    ${renderTechnologies(data.technologies)}
    ${renderProjects(data.projects)}
    ${renderExperiences(data)}
    ${renderContact(data)}
    ${renderFooter('Fernando Silva')}
  </main>
`

