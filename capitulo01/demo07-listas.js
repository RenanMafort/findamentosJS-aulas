const minhaLista = [];
const minhaListaDeTarefas = [
  "mandar email",
  "colocar comida para o dog",
  "limpar o quarto",
];
//console.log(minhaListaDeTarefas[0]);
//console.log(minhaListaDeTarefas[1]);
//console.log(minhaListaDeTarefas[2]);
//console.log(minhaListaDeTarefas[4]);

//Quantidade de itens no array
//console.log(minhaListaDeTarefas.length);

//Adicionar item
minhaListaDeTarefas.push("formatar computador");
//console.log(minhaListaDeTarefas);

//remover ultimo da lista
//const ultimo = minhaListaDeTarefas.pop();
//console.log(ultimo, minhaListaDeTarefas);

//Remover primeiro da lista
const primeiro = minhaListaDeTarefas.shift();
//console.log(primeiro, minhaListaDeTarefas);

//Remover um item especifico a partir de um índice
//console.log(minhaListaDeTarefas[2]);
//qual item remover
// e quantos itens serão removido
//minhaListaDeTarefas.slice(2, 1);
//console.log(minhaListaDeTarefas);

const itens = [1, "computador", 0.22];

//verificar o tipo de array
//console.log(typeof itens);

//verificar se é array da forma correta
//console.log(Array.isArray(itens));

//Orderan
//const numeros = ["c", "z", "a", "d"];
//console.log(numeros.sort());

//Juntar dois arrays
//const novo = itens.concat([1, 2, 3]);
//console.log(novo);

//Juntar arrays em uma string
//console.log(itens.join("====="));

//Verificar indice do item
const index = itens.indexOf("computador");
console.log(itens[index]);
