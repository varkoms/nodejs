// FILE SYSTEM

// fs = File System (no hace falta explicarlo, pero por si las dudas XD)
// De los módulos más importantes y más usado en NodeJS

const fs = require('node:fs')
const stats = fs.statSync('./archivo.txt')
console.log(
  stats.isFile(), // Si es un archivo
  stats.isDirectory(), // Si es directorio
  stats.isSymbolicLink(), // Si es un enlace simbólico
  stats.size // tamaño en bytes
)