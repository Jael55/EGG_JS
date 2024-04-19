const producto = {
  nombre: "Celular",
  precio: 1000,
  stock: 15,
};

console.log(producto);

producto.id = "0012345678";
producto.foto = "https://m.media-amazon.com/images/I/51urW2+kixL._AC_SL1080_.jpg";
producto["detalle"] = "Escribir el detalle de la batería";
producto["color"] = "Gris";

console.log(producto);

delete producto["id"];
delete producto.detalle;

console.log(producto);

console.log(producto.nombre);
console.log(producto["color"]);
