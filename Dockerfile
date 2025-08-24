# Multi-stage build para otimizar o tamanho da imagem
FROM node:22-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json (se existir)
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação Vue com Vite
RUN npm run build

# Estágio final - Nginx Alpine
FROM nginx:alpine

# Remover configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar build da aplicação do estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx (opcional)
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Expor porta 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]