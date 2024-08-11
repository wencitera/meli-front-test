# meli-front-test

Prueba técnica de MercadoLibre.
La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de 
resultados, y la descripción del detalle del producto. 

## Stack tecnológico

src
├───client - Frontend: React, Sass, Vite.js, Jest, Axios.
└───server - Backend: Node.js, Express, Axios.

## Puesta en funcionamiento

1. Clona o descargar este repositorio.
2. Ingresar a la carpeta raíz `cd meli-front-test`.
3. Instalar las dependencias con los siguientes scripts:
3.1. `npm install` - Instala la dependencia para centralizar el alta del server y cliente.
3.2. `npm run install` - Instalar las dependencias para el server y cliente.
3.3. `npm run start` - Iniciar los entornos de desarrollo para el server y cliente.
4. Abrir el navegador y dirigirse a la siguiente url: `http://localhost:5173`.

## Estructura del proyecto

───src
├───client - Se encuentra la configuración e inicialización del cliente
│ ├───assets - Archivos estáticos para consumir desde el cliente
│ ├───components - Componentes a consumir desde las pages u otros componentes
│ ├───constants - Variables que no se modifican y tienen uso común.
│ ├───hooks - Hooks personalizados para reutilización
│ ├───models - Entidades que se utilizan
│ ├───pages - Componentes globales que se consumen desde la navegación
│ ├───services - Comunicación con el backend
│ ├───styles - Definición global de estilos
│ ├───utils - Funciones para dar formato o ajustar información.
│ └───mocks - Utilidades para desarrollo y testing unitario.
│
└───server - Se encuentra la configuración e inicialización del servidor
├───constants - Variables que no se modifican y tienen uso común.
├───functions - Funciones para dar formato o adaptar información.
├───router - Rutas posibles para comunicarse
└───services - Comunicación con servicios externos

## Próximas funcionalidades

- Migración a Typescript para mayor seguridad y calidad de código.
- Migrar componentes a Server Side Rendering.
- Implementar `react-helmet` o `react-helmet-async` para generar un mejor Search Engine Optimization.
- Modularizar componentes de uso comun como Inputs y Buttons
- Implementar test unitarios en el backend.

## Otras funcionalidades

1. Probar unit test, desde la carpeta raiz, ejecutar el comando `npm run test` (Actualmente solo corre tests del cliente)