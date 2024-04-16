const cantidad = Number(prompt("¿Cuántos números deseas sumar?"));

let sumatoria = 0;

for (let i = 1; i <= cantidad; i++) {
    const numeroASumar = Number(prompt("Ingrese un número a sumar"));
    sumatoria = sumatoria + numeroASumar;
}

alert(sumatoria);