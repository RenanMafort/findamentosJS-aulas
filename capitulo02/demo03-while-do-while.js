// enquanto não mudar, não para!

let termoDeParada = true;
let contador = 0;
while (termoDeParada) {
  termoDeParada = contador < 10;
  if (contador % 2 === 0) {
    console.log("Numero par", contador);
  }
  contador += 1;
}

//roda uma vez e testa a variavel depos
do {
  console.log("Só uma vez! pois termoDeParada é", termoDeParada);
} while (termoDeParada);

while (true) {
  // nao vai executar
  console.log("Nem vai executar!");
}
