# Usa una imagen de Node.js compatible con Angular 14
FROM node:14

# Copia los archivos package.json y package-lock.json
COPY package*.json ./
RUN npm install

# Instala las dependencias de Angular globalmente
RUN npm install -g @angular/cli@14
RUN npm install firebase @angular/fire --save

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

COPY . .

# Expone el puerto por el que sirve Angular en desarrollo
EXPOSE 4200


# Comando por defecto para iniciar el servidor
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000"]
