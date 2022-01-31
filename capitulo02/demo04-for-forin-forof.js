const textoPar = "par";
const textoImpar = "impar";
// for (let index = 0; index <= 10; index++) {
//   const decisao = index % 2 === 0 ? textoPar : textoImpar;
//   console.log(`O numero ${index} é ${decisao}`);
// }

const minhaListaDeTarefas = [
  {
    id: parseInt(Math.random() * 10),
    nome: "Zezinho",
    poder: "Veloz",
  },

  {
    id: Math.random(),
    nome: "Mariazinha",
    poder: "Super Força",
  },
];
// console.log(minhaListaDeTarefas);

for (let index = 0; index < minhaListaDeTarefas.length; index++) {
  const item = minhaListaDeTarefas[index];
  console.log(`
  id:${item.id}
  nome: ${item.nome}`);
}

// nao precisa do contador
//For In
for (const index in minhaListaDeTarefas) {
  const item = minhaListaDeTarefas[index];
  console.log("Nome", item.nome);
}

//nao precisa usar index
//For out
for (const item of minhaListaDeTarefas) {
  console.log("Nome:", item.nome);
}
