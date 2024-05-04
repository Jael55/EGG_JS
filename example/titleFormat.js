function titleFormat(cadena) {
  const primeraEnMayuscula = cadena.charAt(0).toUpperCase();
  const restoEnMinuscula = cadena.slice(1).toLowerCase();
  const titulo = primeraEnMayuscula + restoEnMinuscula;
  return titulo;
}

console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"));
