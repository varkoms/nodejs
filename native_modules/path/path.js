// Path

const path = require('node:path')

// Saber que separador de carpetas usa mi SO
console.log(path.sep); 
// Puede imprimir '/' si el sistema operativo es unix o macos
// Puede imprimir '\' si el sistema operativo es Windows

// unir rutas con path.join
// con path.join evitamos usar separadores especiales
// independientemente del SO que estemos ejecutando
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath); // content/subfolder/test.txt

// Obtenemos el nombre del archivo y su extensión dada una ruta
const base = path.basename('/tmp/varko-secret-files/pwd.txt')
console.log(base); //pwd.txt

// Obtener el nombre del archivo dada una ruta
// pero quitando la extension del archivo
const filename = path.basename('/tmp/varko-secret-files/filenamne.txt', '.txt')
console.log(filename); //filename

// Obtenemos la extension de un archivo dada una ruta
const extension = path.extname('/tmp/varko-secret-files/video.mp4')
console.log(extension); //.mp4
