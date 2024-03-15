// APLICACION DE PRUEBA
// Crear una variante del comando ls con NodeJs.
// 'ls' es un comando de linux/mac el cual lista todos los archivos y carpetas

const fs = require("node:fs/promises");
const path = require('node:path')

// 03/14/2024 - 18:44
// Poder pasar como parámetro dentro de la linea de comandos la carpeta en la cual queremos usar el 'ls'
const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(`No se pudo leer el directorio "${folder}"`);
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // stat - información del archivo
    } catch(error) {
      console.error(`No se pudo leer el archivo "${filePath}"`);
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    // Usar los padEnd() y padStart() para darle "formato" a los resultados
    // TODO: Arreglar la tabulación para que los resultados sean simétricos y no se descuadre
    return `${fileType} ${fileSize.toString()} ${fileModified} ${file}`
  });

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder);
