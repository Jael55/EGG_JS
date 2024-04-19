const comprar = () => {
  let totalAPagar = 0;
  let totalProductos = Number(prompt("¿Cuántos productos desea llevar?"));

  for (let i = 1; i <= totalProductos; i++) {
    let nombre = prompt("¿Qué producto desea llevar?");
    let cantidad = Number(prompt("¿Cuántas unidades?"));
    let precio = Number(prompt("¿Cuánto sale cada unidad?"));
    let subtotal = cantidad * precio;
    totalAPagar = totalAPagar + subtotal;
  }
  console.log("Has llevado " + cantidad + " unidades de " + nombre + " por " + precio + " soles.");
  console.log("Total a pagar: " + totalAPagar);
  return totalAPagar;
}

const cliente1 = comprar();
/*console.log("Has llevado " + cantidad + " unidades de " + nombre + " por " + precio + " soles.");
console.log("Total a Pagar: " + totalAPagar);*/
const cliente2 = comprar();
/*console.log("Has llevado " + cantidad + " unidades de " + nombre + " por " + precio + " soles.");
console.log("Total a Pagar: " + totalAPagar);*/
const cliente3 = comprar();
/*console.log("Has llevado " + cantidad + " unidades de " + nombre + " por " + precio + " soles.");
console.log("Total a Pagar: " + totalAPagar);*/
const total = cliente1 + cliente2 + cliente3;
console.log("Venta total: " + total);
