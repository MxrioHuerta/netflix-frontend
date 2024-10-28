# Proyecto Angular

Este proyecto de Angular 12 está configurado para ejecutarse en un contenedor Docker, incluyendo autenticación con Firebase.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Estructura de archivos

El proyecto utiliza dos archivos clave para la configuración de Docker:

- **Dockerfile**: Define la imagen y el entorno de ejecución de Angular dentro del contenedor.
- **docker-compose.yml**: Configura el servicio, puertos y variables de entorno para Docker Compose.

## Instalación y Ejecución

### Paso 1: Clona el Repositorio

```bash
git clone https://github.com/MxrioHuerta/netflix-frontend.git
cd netflix-frontend
```


### Paso 2: Configura el .env de Firebase, The Movie Database y la url del backend en la raíz del proyecto

```.dotenv
THE_MOVIE_DB_API_KEY=your-tmdb-api-key

FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
FIREBASE_APP_ID=your-firebase-app-id

BACKEND_URL=http://localhost:3000/api


```

### Paso 3: Ejecuta el Contenedor

```bash
docker-compose up --build
```

El comando `docker-compose up --build` compila la imagen de Angular y ejecuta el contenedor en el puerto `4200`.

### Paso 4: Accede a la Aplicación

Abre tu navegador y accede a `http://localhost:4200` para ver la aplicación Angular en ejecución.

