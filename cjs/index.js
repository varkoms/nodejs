// CommonJS Require Module 
const { sum } = require("./sum");

console.log("Hola Mundo 👋🏻");
console.info("Hola Mundo 👋🏻");
console.error("Hola Mundo 👋🏻");

// -- Global This --
// Variable global de toda la aplicación,
// ⁄se puede tener acceso desde cualquier parte del código.

// Si se ejecuta en Node, la variable globalThis se llama globañ
// mientras que, si se ejecuta en un navegador, la variable
// se llama window
console.log(globalThis); // <ref *1> Object [global] { ... }
console.log(typeof globalThis); // object, en un navegador será window

// de hecho, el console.log ES PARTE DE globalThis
globalThis.console.log("Hola"); // Hola

console.log(sum(3, 1));
