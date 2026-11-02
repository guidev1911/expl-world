# EXPL WORLD

Plataforma editorial de exploração e conhecimento. Explore ciência, natureza e
tecnologia e descubra como o mundo funciona.

## Tecnologias

- Next.js 16 com App Router e React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Fetch API para futuras consultas ao backend

## Pré-requisitos

- Node.js compatível com a versão instalada do Next.js
- npm
- Backend Spring Boot disponível em `http://localhost:8080` quando a integração
  for utilizada

## Instalação e execução

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para validar o projeto:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Ambiente

Configure `NEXT_PUBLIC_API_URL` no `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

O arquivo `.env.example` contém apenas a configuração local esperada, sem
credenciais.

## Estrutura

```text
app/                    Rotas, layouts, estilos e estados globais
components/common/      Cards reutilizáveis de conteúdo
components/layout/      Cabeçalho e rodapé
data/mock-content.ts    Dados temporários para a prévia editorial
services/               Cliente HTTP e serviços de conteúdo
types/                  Tipos de interface e erros da API
```

As páginas dinâmicas de categorias, tópicos e artigos são geradas a partir dos
slugs presentes nos dados demonstrativos.

## API e dados demonstrativos

O frontend está preparado para consultar:

- `GET /api/v1/categories`
- `GET /api/v1/topics`
- `GET /api/v1/articles`

O cliente HTTP centralizado usa `NEXT_PUBLIC_API_URL` e lança erros explícitos
para configuração ausente ou respostas HTTP malsucedidas.

Os serviços retornam `unknown` intencionalmente: o contrato dos objetos e a
paginação exata precisam ser confirmados com o backend antes de criar tipos de
resposta ou conectar os componentes. Os dados em `data/mock-content.ts` são
temporários, independentes dos serviços e identificados na interface como
conteúdo demonstrativo.

Autenticação JWT, permissões, painel administrativo e mutações ainda não foram
implementados. Os contratos para parâmetros, resposta paginada, seções de
artigos e autenticação também precisam ser alinhados com o backend antes da
integração.
