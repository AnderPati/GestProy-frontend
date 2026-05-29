# GestProy - Frontend Angular

Frontend de **GestProy**, una aplicación full stack para la gestión de proyectos, tareas y archivos.

Este repositorio contiene la interfaz de usuario desarrollada con **Angular**, encargada de consumir la API REST del backend en Laravel y ofrecer una experiencia visual e interactiva para la gestión de proyectos personales.

> Proyecto complementario del backend: [GestProy - Backend Laravel](https://github.com/AnderPati/GestProy-backend)

---

## Índice

- [Descripción](#descripción)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Funcionalidades principales](#funcionalidades-principales)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración del entorno](#configuración-del-entorno)
- [Ejecución del proyecto](#ejecución-del-proyecto)
- [Autenticación](#autenticación)
- [Estructura general del proyecto](#estructura-general-del-proyecto)
- [Conexión con el backend](#conexión-con-el-backend)
- [Comandos útiles](#comandos-útiles)
- [Estado del proyecto](#estado-del-proyecto)
- [Autor](#autor)

---

## Descripción

**GestProy** es una aplicación web pensada para organizar proyectos, tareas y archivos desde una misma plataforma.

El frontend permite al usuario interactuar con todas las funcionalidades principales del sistema mediante una interfaz desarrollada en Angular.  
La aplicación se comunica con un backend en Laravel mediante una API REST protegida con autenticación basada en tokens.

El objetivo del proyecto es practicar y demostrar conocimientos de desarrollo frontend moderno, consumo de APIs, organización de componentes, autenticación, gestión de estado básico y creación de interfaces responsive.

---

## Tecnologías utilizadas

- Angular 16+
- TypeScript
- RxJS
- HTML5
- SCSS
- Angular Router
- Angular Forms
- Angular HTTP Client
- Interceptors
- SweetAlert2
- FullCalendar
- Angular CDK Drag & Drop
- LocalStorage / SessionStorage
- API REST
- Laravel Sanctum

---

## Funcionalidades principales

- Registro de usuarios.
- Inicio de sesión.
- Cierre de sesión.
- Persistencia de sesión mediante token.
- Opción de recordar sesión.
- Interceptor para añadir automáticamente el token Bearer.
- Validación de formularios.
- Gestión de proyectos personales.
- Creación, edición y eliminación de proyectos.
- Gestión de tareas asociadas a proyectos.
- Tareas con estados, fechas, prioridad y etiquetas.
- Vista tipo kanban con drag & drop.
- Centro global de tareas del usuario.
- Filtros para tareas.
- Calendario de tareas por proyecto mediante FullCalendar.
- Gestión del perfil de usuario.
- Subida y eliminación de imagen de perfil.
- Subida y gestión de archivos por proyecto.
- Organización de archivos y carpetas.
- Vista previa de imágenes y documentos PDF.
- Descarga de archivos.
- Estadísticas relacionadas con archivos y almacenamiento.
- Control visual del espacio usado por el usuario.
- Alertas y modales personalizados con SweetAlert2.
- Diseño responsive adaptado a dispositivos móviles.

---

## Requisitos

Antes de instalar el proyecto, asegúrate de tener instalado:

- Node.js 18+
- npm
- Angular CLI
- Git
- Backend de GestProy en Laravel ejecutándose

Puedes instalar Angular CLI de forma global con:

```bash
npm install -g @angular/cli
```

También necesitarás tener configurado y ejecutándose el backend:

```bash
http://127.0.0.1:8000
```

Repositorio del backend:

```bash
https://github.com/AnderPati/GestProy-backend
```

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/AnderPati/GestProy-forntend.git
cd GestProy-forntend
```

> Si el repositorio está renombrado como `GestProy-frontend`, cambia la URL y el nombre de la carpeta.


### 2. Instalar dependencias

```bash
npm install
```


### 3. Revisar la URL de la API

Antes de ejecutar el proyecto, revisa que la URL del backend apunte correctamente a tu servidor Laravel.

Normalmente, en entorno local debería apuntar a:

```ts
http://127.0.0.1:8000/api
```

Dependiendo de cómo esté organizado el proyecto, esta URL puede estar definida en un servicio, archivo de configuración o archivo de entorno.

---

## Configuración del entorno

El frontend necesita conectarse al backend Laravel para poder iniciar sesión, obtener proyectos, gestionar tareas y trabajar con archivos.

Ejemplo de configuración local:

```ts
apiUrl = 'http://127.0.0.1:8000/api';
```

También es importante que el backend tenga configurado CORS para aceptar peticiones desde Angular:

```ts
http://localhost:4200
```

Si el backend está desplegado en un servidor externo, cambia la URL de la API por la URL correspondiente.

Ejemplo:

```ts
apiUrl = 'https://tu-backend.com/api';
```

---

## Ejecución del proyecto

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

Después, abre el navegador en:

```bash
http://localhost:4200
```

Si quieres abrirlo automáticamente:

```bash
ng serve --open
```

---

## Autenticación

El frontend utiliza autenticación mediante token Bearer.

Flujo general de autenticación:

1. El usuario inicia sesión desde el formulario de login.
2. Angular envía las credenciales al backend Laravel.
3. El backend valida los datos y devuelve un token.
4. El frontend guarda el token en `localStorage` o `sessionStorage`.
5. Un interceptor añade automáticamente el token a las peticiones protegidas.
6. El backend valida el token mediante Laravel Sanctum.

Ejemplo del header enviado en peticiones protegidas:

```http
Authorization: Bearer TOKEN
```

El proyecto también incluye una opción de recordar sesión, permitiendo guardar el token de forma persistente o temporal según la elección del usuario.

---

## Estructura general del proyecto

Estructura aproximada del frontend:

```bash
src/
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── register/
│   │   ├── project-detail/
│   │   ├── task-calendar/
│   │   ├── tasks/
│   │   ├── project-files/
│   │   └── profile/
│   ├── models/
│   ├── services/
│   ├── interceptors/
│   ├── guards/
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/
├── environments/
└── styles.scss
```

La estructura puede variar ligeramente según la evolución del proyecto.

---

## Conexión con el backend

Este frontend está diseñado para trabajar junto con la API REST de GestProy desarrollada en Laravel.

Repositorio del backend:

```bash
https://github.com/AnderPati/GestProy-backend
```

El backend se encarga de:

- registro e inicio de sesión;
- generación de tokens;
- validación de usuarios;
- gestión de proyectos;
- gestión de tareas;
- gestión del perfil;
- subida y descarga de archivos;
- control de almacenamiento;
- rutas protegidas.

El frontend consume estos datos mediante servicios de Angular y peticiones HTTP.

Ejemplo de petición protegida:

```ts
this.http.get(`${this.apiUrl}/projects`);
```

El token se añade automáticamente mediante un interceptor, por lo que no es necesario incluirlo manualmente en cada petición.

---

## Comandos útiles

### Ejecutar servidor de desarrollo

```bash
ng serve
```


### Ejecutar servidor y abrir navegador

```bash
ng serve --open
```


### Crear build de producción

```bash
ng build --configuration=production
```


### Ejecutar tests

```bash
ng test
```


### Ejecutar linter

```bash
ng lint
```


### Formatear código

```bash
npm run format
```

> Algunos comandos pueden depender de la configuración concreta del proyecto.

---

## Estado del proyecto

Proyecto desarrollado como aplicación full stack personal para practicar y demostrar conocimientos de desarrollo web moderno.

Actualmente el frontend está pensado principalmente para ejecutarse en entorno local junto con el backend Laravel.

El despliegue público completo requiere configurar correctamente:

- URL de la API;
- CORS en el backend;
- autenticación con tokens;
- variables de entorno;
- rutas de producción;
- almacenamiento de archivos;
- permisos del servidor;
- conexión con base de datos desde el backend.

---

## Autor

**Ander Patino Pacheco**

Desarrollador Web Junior.

- GitHub: [AnderPati](https://github.com/AnderPati)
- Portfolio: próximamente
