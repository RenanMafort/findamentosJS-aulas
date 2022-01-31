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
    this.tela.atualizarImagens(this.heroisIniciais);
    // quando essa função executar, vai ignorar o this de window
    // ela vai usar o this dessa tela
    this.tela.configurarBotaoJogar(this.jogar.bind(this));
  }

  embaralhar() {
    const copias = this.heroisIniciais

      // duplicar os itens
      .concat(this.heroisIniciais)
      // entrar em cada um dos itens e gerar um id para cada
      .map((item) => {
        return Object.assign({}, item, { id: Math.random() / 0.5 });
      })
      // // ordenar
      .sort(() => Math.random() - 0.5);

    this.tela.atualizarImagens(copias);
  }

  jogar() {
    this.embaralhar();
  }
}
