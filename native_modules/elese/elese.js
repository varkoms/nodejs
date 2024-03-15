// APLICACION DE PRUEBA
// Crear una variante del comando ls con NodeJs.
// 'ls' es un comando de linux/mac el cual lista todos los archivos y carpetas

const fs = require("node:fs/promises");

// 03/14/2024 - 18:44
// Poder pasar como parámetro dentro de la linea de comandos la carpeta en la cual queremos usar el 'ls'
// Ejemplo, si ejecutamos node elese/elese.js ---> obtendremos todo el contenido de elese/
// Ejemplo, si ejecutamos node elese/elese.js path ---> obtendremos unicamente el contenido de path/
// Ejemplo, si ejecutamos node elese/elese.js os ---> obtendremos unicamente el contenido de os/
// Ejemplo, si ejecutamos node elese/elese.js random ---> obtendremos "Error al leer el directorio: ENOENT", ya que random/ no existe
const folder = process.argv[2] ?? '.'

fs.readdir(folder)
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
