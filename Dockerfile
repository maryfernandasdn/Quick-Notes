# Dockerfile
# Base Playwright (Chromium já incluído)
FROM mcr.microsoft.com/playwright:v1.46.0-jammy


WORKDIR /app


# Copia package.json e package-lock (ou package*.json)
COPY package*.json ./


# Instala dependências de dev
RUN npm ci --silent


# (Garantir instalação do Chromium — imagem já traz, mas manter comando seguro)
RUN npx playwright install --with-deps chromium


# Copia todo o projeto
COPY . .


# Build da extensão para dist/
RUN node scripts/build-extension.mjs


CMD ["npm","test:e2e"]