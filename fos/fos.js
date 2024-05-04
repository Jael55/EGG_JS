const nombres = ["Abel", "Carlos", "Carla", "Camilo", "Belen"];

let cadena = ""

/* foreach */

nombres.forEach((cadaElemento) => {
    console.log(cadaElemento)
    const frase = (cadaElemento + " Es miembro de EGG, ");
    cadena = cadena + frase;
})

console.log(cadena);

 const nombresTransformados = nombres.map((cadaElemento)=> {
    cadaElemento = cadaElemento.toUpperCase();
    cadaElemento = "Miembro de EGG: " + cadaElemento;
    return cadaElemento;
})

console.log(nombresTransformados);

/* filter */

const filtrado = nombres.filter(cadaElemento => cadaElemento.includes("Ca"));

console.log(filtrado)