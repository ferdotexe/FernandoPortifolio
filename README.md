# Portfolio - Fernando Silva

Site de portfolio pessoal desenvolvido com **Vite + TypeScript + Tailwind CSS**.

## Tecnologias

- Vite
- TypeScript
- Tailwind CSS

## Como executar

1. Instale as dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Gere build de producao:

```bash
npm run build
```

4. Rode preview local da build:

```bash
npm run preview
```

## Estrutura do projeto

```text
src/
  data/
    portfolio-data.ts        # Dados do portfolio (conteudo)
  domain/
    portfolio.ts             # Tipos e contratos da aplicacao
  features/
    floating-menu.ts         # Comportamento do menu lateral/flutuante
    projects-carousel.ts     # Comportamento do carrossel de projetos
  ui/
    icons.ts                 # SVGs centralizados
    render-app.ts            # Renderizacao das secoes da pagina
  main.ts                    # Composicao e bootstrap da aplicacao
  style.css                  # Estilos globais e utilitarios
public/
  images/                    # Imagens estaticas do portfolio
  dev-icon.svg               # Favicon customizado
```

## Arquitetura (legibilidade e manutencao)

O projeto foi separado em camadas para facilitar manutencao:

- **domain**: modelos e tipos (sem dependencia de UI).
- **data**: conteudo de negocio da pagina (textos, links, lista de projetos etc.).
- **ui**: funcoes puras de renderizacao de markup.
- **features**: comportamentos de interface (menu e carrossel).
- **main**: inicializacao da aplicacao.

## Responsividade

O layout foi pensado em abordagem mobile-first:

- Hero com conteudo dentro de um card principal no celular.
- Grid/flex responsivo nas secoes para leitura em telas pequenas.
- Blocos de contato e tecnologias com quebra automatica.
- Navegacao por menu flutuante funcional em mobile e desktop.

## Personalizacao rapida

Edite `src/data/portfolio-data.ts` para atualizar:

- Nome, cargo e localidade
- Links sociais
- Texto da secao Sobre Mim
- Tecnologias
- Projetos
- Experiencias
- Contato

## Acessibilidade e UX

- Links externos com `rel="noreferrer noopener"`.
- `aria-label` em botoes e links de icones.
- Navegacao com rolagem suave para secoes.
