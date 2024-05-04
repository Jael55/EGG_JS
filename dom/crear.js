const h2Tag = document.createElement("h2");

h2Tag.textContent = "EESTE ES EL SUBTÍTULO";
h2Tag.style.width = "500px";
h2Tag.style.height = "100px";
h2Tag.style.color = "white";
h2Tag.style.backgroundColor = "gray";
h2Tag.style.fontSize = "25px";
h2Tag.style.padding = "20px";
h2Tag.style.margin = "20px 0";
h2Tag.style.display = "flex";
h2Tag.style.justifyContent = "center";
h2Tag.style.alignItems = "center";

const preSelector = document.querySelector("#subtitulo");
preSelector.appendChild(h2Tag);

const productos = ["celular", "tablet", "computadora"];

const products1Sel = document.querySelector("#products1");

for (let producto of productos) {
  const h3Tag = document.createElement("h3");
  h3Tag.style.backgroundColor = "yellow";
  h3Tag.style.margin = "10px";
  h3Tag.style.padding = "10px";
  h3Tag.textContent = producto;
  products1Sel.appendChild(h3Tag);
}

const objetos = [
  { nombre: "celular", precio: 100 },
  { nombre: "tablet", precio: 100 },
  { nombre: "computadora", precio: 100 },
];

const products2Sel = document.querySelector("#products2");
objetos.forEach((cadaElemento) => {
  const h3Tag = document.createElement("h3");
  h3Tag.style.backgroundColor = "yellow";
  h3Tag.style.margin = "10px";
  h3Tag.style.padding = "10px";
  h3Tag.textContent = cadaElemento.nombre.toUpperCase(  ) + " - Precio: " + cadaElemento.precio;
  products1Sel.appendChild(h3Tag);
});
