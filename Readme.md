# 📝 Quick Notes — Extensão Chrome (Manifest V3)

Extensão simples para Chrome que permite salvar anotações rápidas diretamente no popup do navegador, usando `chrome.storage.local`.

## 🚀 Instalação Manual

1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/maryfernandasdn/Quick-Notes.git

   ## 📦 Funcionalidades

- Extensão Chrome MV3 (Manifest V3)
- Build automatizado e empacotado em `dist/` e `dist/extension.zip`
- Testes E2E com **Playwright (Chromium)**
- Ambiente reprodutível com **Docker** e **Docker Compose**
- CI/CD no **GitHub Actions** com artefatos publicados (relatório HTML + .zip da extensão)

📜 Scripts úteis
Comando	Descrição
npm run build	| Gera o build da extensão em dist/ e o arquivo .zip
npm run test:e2e	| Executa os testes E2E com Playwright
docker compose | build	Cria a imagem Docker
docker compose  run --rm e2e | Roda os testes dentro do container
npx playwright show-report	| Abre o relatório HTML dos testes

