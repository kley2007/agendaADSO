const nombre = "Kleider López";
const ficha = 3412785;
const notas = [2.0, 2.5, 2.8];
const promedio = (notas[0] + notas[1] + notas[2]) / 3;
const estado = promedio >= 3 ? "Aprobado" : "No Aprobado";

console.log("==============================");
console.log("SISTEMA DE NOTAS SENA");
console.log("==============================");
console.log(`Aprendiz: ${nombre}`);
console.log(`Ficha: ${ficha}`);
console.log(`Notas: ${notas}`);
console.log("==============================");
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Estado: ${estado}`);