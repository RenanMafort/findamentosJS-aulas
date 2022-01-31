class Heroi {
  atacar() {
    console.log("Atacou!");
  }
  defender() {
    console.log("Defendou!");
  }
}

const heroi = new Heroi();
heroi.atacar();
heroi.defender();

//usando construtor!

class Heroi2 {
  constructor(nome, idade) {
    this.nome = nome;
    this.idada = idade;
  }

  atacar() {
    console.log(`O ${this.nome} de ${this.idada} anos atacou!!`);
  }
}

const heroi2 = new Heroi2(`Flash`, 80);
heroi2.atacar();

class heroi3 {
  static obterAnoNascimento(idade) {
    return 2022 - idade;
  }
}

const anoNascimento = heroi3.obterAnoNascimento(19);
console.log(`O ano de nascimento do Heroi é ${anoNascimento}`);
