# Etapa 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar arquivos package.json e package-lock.json para instalar as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copiar todo o código da aplicação
COPY . .

# Rodar o build do Next.js
RUN npm run build

# Etapa 2: Rodar a aplicação
FROM node:18-alpine AS runner

WORKDIR /app

# Copiar arquivos necessários da etapa de build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Definir a variável de ambiente para produção
ENV NODE_ENV=production

# Expor a porta para o serviço
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]