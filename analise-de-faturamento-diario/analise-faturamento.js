// Carregue os dados do JSON ou XML em uma variável faturamento

const dias = faturamento.length;
const faturamentoDiario = faturamento.map((dado) => dado["valor"]);

// Encontre o menor e o maior valor de faturamento
const menorValor = Math.min(...faturamentoDiario);
const maiorValor = Math.max(...faturamentoDiario);

// Calcule a média mensal ignorando dias sem faturamento
const diasComFaturamento = faturamentoDiario.filter(
  (valor) => valor > 0
).length;
const mediaMensal =
  faturamentoDiario.reduce((acumulador, valor) => acumulador + valor, 0) /
  diasComFaturamento;

// Conte os dias com faturamento acima da média
const diasAcimaMedia = faturamentoDiario.filter(
  (valor) => valor > mediaMensal
).length;

// Exiba os resultados
console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
