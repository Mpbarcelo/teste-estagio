function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numero = parseInt(prompt("Digite um número: "));

if (fibonacci(numero) === numero) {
  alert(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
