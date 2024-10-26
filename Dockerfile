# Usa una imagen de Node.js compatible con Angular 12
FROM node:14

# Copia los archivos package.json y package-lock.json
COPY package*.json ./
RUN npm install

# Instala las dependencias de Angular globalmente
RUN npm install -g @angular/cli@12

#Install clerk for angular
RUN npm install @clerk/clerk-js

# Install tailwindcss
RUN npm install tailwindcss


# Configura el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

COPY . .

# Expone el puerto por el que sirve Angular en desarrollo
EXPOSE 4200


# Comando por defecto para iniciar el servidor
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000"]
