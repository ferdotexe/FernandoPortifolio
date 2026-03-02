import type { PortfolioData } from '../domain/portfolio'

export const portfolioData: PortfolioData = {
  fullName: 'FERNANDO SILVA FRANÇA',
  role: 'Fullstack Developer',
  location: 'Brasil',
  photoUrl: '/images/1771373789730.jpg',
  socials: [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/fernandosfranca/' },
    { name: 'github', url: 'https://github.com/ferdotexe' },
  ],
  aboutText:
    'Me chamo Fernando Silva França nascido em Brasília, Distrito Federal, possuo graduação em análise e desenvolvimento de sistema e curso completo de técnico em informática. As tecnologias que tenho mais especialização são Java, spring boot, typescript, angular, MySQL e postgres.',
  technologies: [
    { name: 'Java', iconUrl: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
    { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
    { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'Angular', iconUrl: 'https://cdn.simpleicons.org/angular/DD0031' },
    { name: 'PostgreSQL', iconUrl: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'MySQL', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'Spring Boot', iconUrl: 'https://cdn.simpleicons.org/springboot/6DB33F' },
    { name: 'Docker', iconUrl: 'https://cdn.simpleicons.org/docker/2496ED' },
  ],
  projects: [
    {
      title: 'CMS de marmitas',
      description: 'projeto pessoal para controle no fluxo de caixa de marmitas da minha mãe',
      tags: ['spring boot', 'angular', 'postgres'],
      repoUrl: '',
      imageUrl: '',
    },
  ],
  experiences: [
    {
      company: 'ON-RTDPJ',
      period: '2022 - ATUAL',
      role: 'Auxiliar administrativo',
      bullets: [
        'Atendimento ao cliente',
        'Organização de planilhas',
        'Automatização do fluxo de atendimentos utilizando python e suas bibliotecas',
        'Criação de relatório do suporte utilizando Power BI',
      ],
      marker: 'green',
    },
    {
      company: 'Escola Técnica de Brasília',
      period: '2021 - 2022',
      role: 'Estagiário técnico em informática',
      bullets: [
        'Administração de banco de dados',
        'Configurações de servidor e infraestrutura de T.I',
        'Criações de scripts bash e configurações de servidores linux',
      ],
      marker: 'white',
    },
  ],
  contact: {
    email: 'fernandosilva348@gmail.com',
    phone: '+55 (61) 9 9265-9754',
  },
  menu: [
    { id: 'hero', label: 'Hero' },
    { id: 'sobre-mim', label: 'Sobre mim' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'contato', label: 'Contato' },
  ],
}

