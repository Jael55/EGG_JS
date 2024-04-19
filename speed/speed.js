const calcularVelocidad = (distancia, tiempo) => {
    /*const distancia = 10;
    console.log("Distancia: " + distancia + " m");
    const tiempo = 2;
    console.log("Tiempo: " + distancia + " s");*/
    const velocidad = distancia / tiempo;
    //console.log("La velocidad del móvil es: " + velocidad + " m/s");
    return velocidad;
}

const velocidad1 = calcularVelocidad(50, 10);
console.log("La velocidad del Jesús es: " + velocidad1 + " m/s");
const velocidad2 = calcularVelocidad(100, 40);
console.log("La velocidad del Joel es: " + velocidad2 + " m/s");
const velocidad3 = calcularVelocidad(150, 23);
console.log("La velocidad del Frank es: " + velocidad3 + " m/s");