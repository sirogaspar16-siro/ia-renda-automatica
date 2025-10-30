# IA Renda Automática

Projeto React + Vite + Tailwind CSS

## Como rodar

```cmd
npm install
npm run dev
```

Acesse: http://localhost:5173/

## Build de produção

```cmd
npm run build
npm run preview
```

## Estrutura principal

- `src/App.jsx`: componente principal
- `src/index.jsx`: entrada do React
- `index.html`: HTML raiz
- `tailwind.config.js`: configuração do Tailwind
- `postcss.config.cjs`: configuração do PostCSS

## Sitemap

O projeto gera automaticamente `dist/sitemap.xml` depois de `npm run build`.

Defina as rotas no arquivo `routes.json` na raiz do projeto (array de strings). Exemplo:

```json
[
  "/",
  "/comprar"
]
```

Para gerar URLs corretas no sitemap, defina a variável de ambiente `SITE_URL` antes do build:

No cmd.exe:
```cmd
set SITE_URL=https://meusite.com && npm run build
```

No PowerShell:
```powershell
$env:SITE_URL='https://meusite.com'; npm run build
```

## Deploy

Netlify

### Deploy via GitHub Actions (Netlify)

Há um workflow pré-configurado para GitHub Actions em `.github/workflows/deploy-netlify.yml` que executa `npm run build` e faz deploy do diretório `dist` para o Netlify.

Antes de usar o workflow, configure estes segredos no repositório (Settings → Secrets):

- `NETLIFY_AUTH_TOKEN` — token pessoal do Netlify (crie em https://app.netlify.com/user/applications).
- `NETLIFY_SITE_ID` — o ID do site Netlify (encontrado nas configurações do site no painel do Netlify).
- `SITE_URL` — a URL pública do site (ex: `https://meusite.com`) — será usada para gerar o `sitemap.xml`.

Depois de adicionar os segredos, qualquer push na branch `main` disparará o workflow e fará o deploy automático.

## Observações

- `robots.txt` foi adicionado.
- Edite o número do WhatsApp em `App.jsx` se necessário.
- O projeto já está pronto para deploy estático (Netlify, Vercel, etc).
