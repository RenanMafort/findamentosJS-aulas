//meses começam do zero!
const dataAniversario = new Date(2021, 0, 24);
// console.log(dataAniversario);

const primeiraDataDoJS = new Date(0);
// console.log(primeiraDataDoJS.getTime());

const hoje = new Date();
// console.log(hoje.toString());
// console.log(hoje.toLocaleDateString());

//formato global recomendado!
console.log(hoje.toISOString());

const dia = hoje.getDate();
hoje.setDate(dia + 5); // +5 dias depois da data atual
hoje.setHours(10, 30, 0);

console.log(`
Dia: ${hoje.getDate()}
Mes: ${hoje.getMonth()}
Ano: ${hoje.getFullYear()}
Hora: ${hoje.getHours()}
Minute: ${hoje.getMinutes()}
Segundos: ${hoje.getSeconds()}
`);

console.log(new Date(2020, 1, 20) > new Date(2000, 1, 1));
