# Use a imagem oficial do Node.js como base
FROM node:22-alpine

# Configuração do diretório de trabalho
WORKDIR /app/frontend

# Copia os arquivos necessários
COPY package.json .
COPY package-lock.json .

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para o diretório de trabalho
COPY . .

# Expõe a porta do frontend
EXPOSE 5173

# Comando para iniciar o servidor de produção
CMD ["npm", "run", "dev"]
