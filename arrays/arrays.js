const arreglo = ["primer", 25, "hola", { name: "eggsy" }, true];
const edades = [15, 20, 30, 60, 80];

console.log("Primer elemento de un Array: " + arreglo[0]);
console.log("Segundo elemento de un Array: " + arreglo[1]);
console.log("Tercer elemento de un Array: " + arreglo[2]);
console.log("Cuarto elemento de un Array: " + arreglo[3]);
console.log("Último elemento de un Array: " + arreglo[arreglo.length - 1]);

for (let i = 0; i <= (edades.length - 1); i++) {
  console.log(edades[i]);
  console.log("La edad de la persona es: " + edades[i])
}

for (let edad of edades) {
    console.log("La edad con for of es: " + edad);
}

for (let cadaElemento of arreglo) {
    console.log(cadaElemento);
}