# Modulos Nativos de NodeJS

Cada aplicación que realicemos en node.js puede hacer uso de infinidad de módulos de terceros que encontramos en npm, sin embargo también debemos saber que al instalar node.js éste ya cuenta con algunos módulos muy útiles.

## OS
---
El módulo OS en Node. js proporciona información detallada sobre el hardware y el sistema operativo en el que se está ejecutando la aplicación. Esta API nos permite acceder a datos relevantes, como la arquitectura del sistema, información sobre la CPU, detalles de la memoria y datos de red.

## FileSystem
---
No hay mucho que explicar de éste módulo, nos permite acceder al sistema de archivos del sistema operativo, crear y renombrar carpetas, acceder y escribir archivos, etc.

> Formas de Leer un archivo
>- Síncrona (fs/fs.readFile.sync.js)
>- Asíncrona (fs/fs.readFile.async.js)
>- Por promesas (fs/fs.Promises.js)
>- Mediante Async/Await (fs/fs.async-await.mjs)
>- Mediante Async/Await y en paralelo (fs/fs.async-await-parallel.mjs)