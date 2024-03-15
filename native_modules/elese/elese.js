// APLICACION DE PRUEBA
// Crear una variante del comando ls con NodeJs.
// 'ls' es un comando de linux/mac el cual lista todos los archivos y carpetas

const fs = require("node:fs/promises");

fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Error al leer el directorio:", err);
    }
  });
