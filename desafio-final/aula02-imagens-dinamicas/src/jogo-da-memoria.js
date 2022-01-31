class JogoDaMemoria {
  //se ,amdar um obj = { tela: 1, idade: 2, etc: 3}
  //vai ignorar o resto das propriedades e pegar somente a propriedade tela
  constructor({ tela }) {
    this.tela = tela;

    // caminho do arquivo sempre relativo ao index.html
    this.heroisIniciais = [
      { img: "./arquivos/batman.png", name: "batman" },
      { img: "./arquivos/antena man.png", name: "antena man" },
      { img: "./arquivos/mirnha.png", name: "mirnha" },
      { img: "./arquivos/super gild.png", name: "super gild" },
    ];
  }
  //para usar o this, não podemos o static
  inicializar() {
    //vai pegar todas as funcoes da classe tela!
    //coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais);
  }
}
