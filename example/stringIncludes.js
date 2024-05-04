function stringIncludes(subcadena, cadena) {
  return cadena.includes(subcadena);
}

console.log(stringIncludes("he", "Hello"));
console.log(stringIncludes("he", "hello world"));
