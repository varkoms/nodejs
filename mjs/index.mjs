// .js --> por defecto utiliza CommonJS
// .mjs --> ECMAScript Modules
// .cjs --> para utilizar CommonJS

import { sum, sub, mult } from './calculos.mjs'

console.log(sum(3, 1))
console.log(sub(3, 10))
console.log(mult(3, 3))