/* charAt */

const cadena = "Hola Como ESTÁS?";
console.log("CHARAT: " + cadena.charAt(1));
console.log("CHARAT: " + cadena.charAt(2));
console.log("CHARAT: " + cadena.charAt(3));
console.log("CHARAT: " + cadena.charAt(cadena.length - 1));

/* slice */

console.log("SLICE: " + cadena.slice(0, 4));
console.log("SLICE: " + cadena.slice(6, 10));
console.log("SLICE: " + cadena.slice(8, cadena.length));

/*split*/

console.log("SPLIT: " + cadena.split("o"));
console.log("SPLIT: " + cadena.split(" "));
console.log("SPLIT: " + cadena.split(""));
console.log(typeof cadena.split(""));

/* reverse */

console.log("REVERSE: " + cadena.split(" ").reverse());
console.log("REVERSE: " + cadena.split("").reverse());
