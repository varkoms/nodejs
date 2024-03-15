// FILE SYSTEM
// Leer archivos mediante async-await y en paralelo

import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8")
]).then(([text, secondText]) => {
  console.log('primer texto:',text);
  console.log('segundo texto:', secondText);
})

console.log("----> Haciendo cosas mientras lee el archivo");