const readLine = require("readline");
const terminal = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// terminal.question("Qual é o seu nome?\n", (nome) => {
//   terminal.question("Qual é seu telefoone?\n", (telefone) => {
//     console.log(`Nome: ${nome}
//          Telefone: ${telefone}`);
//   });
// });

function questionAsync(texto) {
  return new Promise((resolve, reject) => {
    terminal.question(`${texto}\n`, resolve);
  });
}
let nome = "";
let telefone = "";
Promise.resolve()
  .then(() => questionAsync("QUal o seu nome?"))
  .then((respostaNome) => {
    if (!respostaNome) throw new Error("Campo vazio!");
    nome = respostaNome;
  })
  .then(() => questionAsync("Qual é o seu telefone?"))
  .then((respostaTelefone) => {
    if (!respostaTelefone) throw new Error("CAMPO VAZIO!");

    telefone = respostaTelefone;
  })
  .then(() => {
    console.log(`Nome: ${nome}, Telefone${telefone}`);
  })
  .catch((error) => {
    console.log("Deu ruim******", error.stackn);
  })
  .finally(() => terminal.close());
