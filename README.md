# 🚀 Backend API - Control de Finanzas

API RESTful construida con Node.js, TypeScript y MongoDB para registrar ingresos, egresos y gestionar movimientos financieros, categorización y usuarios.

---

## 📦 Tecnologías

- Node.js + Express

- TypeScript

- MongoDB + Mongoose

- Rutas absolutas con aliases (@modules, @config, etc.)

- Arquitectura modular y por features

- Swagger para documentación de la API

- JWT para proteger rutas con autenticación

- Zod para validación de campos del cliente

- Biome para formateo y linting automático del código

- Docker para entornos de desarrollo y producción

---

## ⚙️ Requisitos

- Node.js 18+
- MongoDB local o en contenedor
- Docker y Docker Compose
- `npm` o `yarn`

---

## 🧪 Scripts disponibles

```bash
npm run dev               # Ejecuta en modo desarrollo
npm run build             # Compila TypeScript y convierte aliases
npm start                 # Corre el proyecto compilado
npm run biome:lint:check  # Chequear errores de linting
npm run biome:lint:fix    # Corrige errores de linting
npm run biome:format      # Formatea el código


docker-compose -f docker-compose.dev.yml up --build  # Ejecuta en modo desarrollo con Docker
docker-compose -f docker-compose.dev.yml up -d       # Ejecuta en modo producción con Docker
docker-compose -f docker-compose.dev.yml down        # Detiene el contenedor de Docker
docker-compose -f docker-compose.dev.yml down -v     # Detiene el contenedor y elimina volúmenes