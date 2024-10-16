# 🚀 Tech-House Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

Frontend de una implementacion de una lista de tareas utilizando Next.js.

## 📝 Descripción

Este proyecto es una aplicación frontend desarrollada con [Next.js](https://nextjs.org/). La aplicación consume la API pública de ejemplo ([jsonplaceholder](https://jsonplaceholder.typicode.com/todos/)) para mostrar información sobre tareas.

## 🎨 Funcionalidades

- **Interfaz de Usuario**: Implementada a partir del diseño proporcionado.
- **Consumo de jsonplaceholder**: Obtén datos sobre tareas.
- **Navegación Dinámica**: Navega fácilmente entre diferentes secciones de la aplicación.
- **Renderizado Lado del Servidor**: Aprovecha las capacidades de Next.js para mejorar el rendimiento.

## 📄Paginación

- Desarrollé la funcionalidad de paginación en la rama **feature/pagination**, donde conecté el frontend a una API que creé específicamente para este challenge. En esta rama, el frontend interactúa con la API para realizar operaciones de paginación, agregar y eliminar tareas (todos), y gestionar los datos almacenados en una base de datos MongoDB. Además, implementé un cron job en la API para sincronizar y actualizar los datos periódicamente. Puedes ver el código de la API en este [REPOSITORIO](https://github.com/mavillabasa-dev/tech-house-api).

## 🔧 Instalación

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/mavillabasa-dev/tech-house-tasks.git
    cd tech-house
    ```

2. **Instala las dependencias**:

    ```bash
    npm install
    ```

3. **Ejecuta la aplicación**:

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## 📁 Estructura del Proyecto

- **`/pages`**: Contiene las páginas de la aplicación.
- **`/components`**: Componentes reutilizables de la interfaz.
- **`/public`**: Archivos estáticos como imágenes y fuentes.
- **`/services`**: Servicios back.
- **`/hooks`**: Custom hooks necesarios para este alcance.

## 📁 Unit test
```bash
    npm run test
```
- Cree los unit test para componentes, custom hooks y servicios (no todos por cuestion de tiempo). el foco fue mostrar como poder testear los diferentes tipos de archivos y funcionalidades.
- Configure jest para que podamos obtener el coverage, es un item importante a la hora de desplegar cumplir con este requisito de calidad.

## 📁 Manejo de errores

- Implemente la funcion de Next de "Error Boundary" que propone - [Error Next.js](https://nextjs.org/docs/app/building-your-application/routing/error-handling)

## 📁 Agregar y eliminar tareas

- En este caso simule el agregar y eliminar desde el front manejando el arreglo de tareas que obtengo del back.  

## 🔗 Enlaces Útiles

- [Documentación de Next.js](https://nextjs.org/docs)

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes sugerencias o mejoras, por favor abre un [issue](https://github.com/tu-usuario/tu-repositorio/issues) o envía un [pull request](https://github.com/tu-usuario/tu-repositorio/pulls).

## 🧑‍💻 Autor

Marcos Villabasa - [@mavillabasa-dev](https://github.com/mavillabasa-dev/)

## 📜 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
