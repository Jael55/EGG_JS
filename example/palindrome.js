function palindrome(cadena) {
  const cadenaFinal = cadena.split('').reverse().join('');
  return cadena === cadenaFinal;
}

console.log(palindrome("hello"));
console.log(palindrome("hannah"));