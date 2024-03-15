// Modulos Nativos

// Modulo del Sistema Operativo
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Información del Sistema Operativo');
console.log('--------------------------------------');
console.log('Nombre:', platform())
console.log('Versión: ', release())
console.log('Arquitectura: ', arch())
console.log('Información del CPU: ', cpus()) // ---> Escalar procesos en NodeJS
console.log('Memoria Libre: ', freemem() / 1024 / 1024)
console.log('Memoria Total: ', totalmem() / 1024 / 1024)
console.log('Tiempo de Uso: ', uptime() / 60 / 60)

