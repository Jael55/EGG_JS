const frase = prompt("Ingrese una palabra o frase");
console.log(frase);
//const cantidad = frase.length;
//console.log(cantidad);
//const mensajeCantidad = frase + " = " + cantidad;
//console.log(mensajeCantidad);

const fraseMinusculas = frase.toLowerCase();
console.log(fraseMinusculas);
const fraseMayusculas = frase.toUpperCase();
console.log(fraseMayusculas);
const minMay = fraseMinusculas + " " + fraseMayusculas;
console.log(minMay);