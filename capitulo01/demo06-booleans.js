const podeDirigir = true;
if (podeDirigir) {
  console.log("Ela pode dirigir");
}

const saldoConta = 1;
if (!saldoConta) {
  console.log("Não tem saldo!");
}

const boolComString = "Eae hackrzao";
//Force the value true or false according to the table
console.log("boolComString", !!boolComString);

//negação
console.log("negação", !boolComString);

//negação + forçar a bool
console.log("negação + forçar bool", !!!boolComString);
