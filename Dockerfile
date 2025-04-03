# Dockerfile
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Compilar TypeScript
RUN npm run build

# Exponer el puerto de la app
EXPOSE 6900

# Comando para producción
CMD ["npm", "start"]
