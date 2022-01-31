function nomeDaFuncao(params1) {
  // bloco de código
}

function queDiaEhoje() {
  const data = new Date();
  console.log(`Hoje é dia : ${data.getDate()}`);
}

queDiaEhoje();

function soma(valor1, valor2) {
  console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2);
}
soma(10, 20);
soma(3, 4);

//-Funçoes pode retornan valores
function soma(valor1, valor2) {
  return valor1 + valor2;
}
// const idade = 20;
// const tamanho = 10;
// const resultado = soma(idade, tamanho);
// console.log("Resultado", resultado);

function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2;
  return resultado;
}
console.log(`O resultado da multiplcação é:`, multiplicar(10, 30));

const funcionario1 = {
  nome: "zezinho",
  desconto: 0.2,
  salarioBruto: 2000,
  salarioliquido: 0,
};

const funcionario2 = {
  nome: "Mariazinha",
  desconto: 0.1,
  salarioBruto: 2000,
  salarioliquido: 0,
};

// const descontoFuncionario1 =
//   funcionario1.salarioBruto - funcionario1.desconto * funcionario1.salarioBruto;

// const descontoFuncionario2 =
//   funcionario2.salarioBruto - funcionario2.desconto * funcionario2.salarioBruto;

//   console.log{`
//   funcionario1: ${descontoFuncionario1}
//   Funcionario2: ${descontoFuncionario2}`}

function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - salarioBruto * desconto;
}

funcionario1.salarioliquido = calcularDesconto(
  funcionario1.salarioBruto,
  funcionario1.desconto
);
funcionario2.salarioliquido = calcularDesconto(
  funcionario2.salarioBruto,
  funcionario2.desconto
);

console.log(`
Salario funcionario ${funcionario1.nome}: ${funcionario1.salarioliquido}
Salario funcionario ${funcionario2.nome}: ${funcionario1.salarioliquido}
`);
