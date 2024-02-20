function inverterString(texto) {
  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }
  return invertido;
}

const texto = prompt("Digite uma string: ");

const textoInvertido = inverterString(texto);

console.log(`String original: ${texto}`);
console.log(`String invertida: ${textoInvertido}`);
