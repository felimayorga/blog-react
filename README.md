# React Blog [Website](https://felimayorga.github.io/blog-react/)

La aplicacion de blog en React usa [Vite](https://vitejs.dev/) y [React Router](https://reactrouter.com/en/main).

Vite como herramienta de desarrollo, se encarga de la compilación y el servidor de desarrollo. Y React Router se encarga de la gestión de rutas y la navegación.

Las dependencias del proyecto usadas para la aplicacion son:

- [TanStack Query](https://tanstack.com/query/latest) y [Axios](https://axios-http.com/) para la gestion de las peticiones a la API.
- [@formkit/tempo](https://tempo.formkit.com/) para el correcto formato de las fechas y horas.
- [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google) para integrar la autenticación de Google.

## Servidor de desarrollo

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm run dev
```

Este comando iniciará el servidor de desarrollo en el puerto 5173.

## Despliegue

Para desplegar la aplicación en un servidor web, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm run deploy
```


Este comando creará un carpeta `dist/` en la raiz del proyecto y haciendo uso de la herramienta [gh-pages](https://github.com/tschaub/gh-pages) desplegara la aplicación en un sitio web público alojado en GitHub Pages.