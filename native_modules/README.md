# Modulos Nativos de NodeJS

Cada aplicación que realicemos en node.js puede hacer uso de infinidad de módulos de terceros que encontramos en npm, sin embargo también debemos saber que al instalar node.js éste ya cuenta con algunos módulos muy útiles.

## OS
---
El módulo OS en Node. js proporciona información detallada sobre el hardware y el sistema operativo en el que se está ejecutando la aplicación. Esta API nos permite acceder a datos relevantes, como la arquitectura del sistema, información sobre la CPU, detalles de la memoria y datos de red.

## FileSystem
---
No hay mucho que explicar de éste módulo, nos permite acceder al sistema de archivos del sistema operativo, crear y renombrar carpetas, acceder y escribir archivos, etc.

## _Formas de Leer un archivo_
>- Síncrona (fs/fs.readFile.sync.js)
>- Asíncrona (fs/fs.readFile.async.js)
>- Por promesas (fs/fs.Promises.js)
>- Mediante Async/Await (fs/fs.async-await.mjs)
>- Mediante Async/Await y en paralelo (fs/fs.async-await-parallel.mjs)

## Path
---
El módulo path es uno de los módulos incorporados de casa en NodeJS y lo podemos usar para trabajar con rutas dentro del sistema de archivos. Es uno de los módulos más usados, sea cual sea el nivel de NodeJS en el que estés y resulta básico para muchas aplicaciones basadas en Node.