function lengthOf(cadena) {
  if (cadena === "") {
    return "Invalid Input";
  } else {
    return cadena.length;
  }
}

console.log(lengthOf("Hello"));
console.log(lengthOf(""));