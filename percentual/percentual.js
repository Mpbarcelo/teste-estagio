const estados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(estados).reduce(
  (acumulador, valor) => acumulador + valor,
  0
);

const porcentagens = Object.entries(estados).map(([estado, valor]) => {
  const percentual = (valor / totalFaturamento) * 100;
  return { estado, percentual: percentual.toFixed(2) };
});

console.log("Percentual de faturamento por estado:");
porcentagens.forEach(({ estado, percentual }) =>
  console.log(`${estado}: ${percentual}%`)
);
