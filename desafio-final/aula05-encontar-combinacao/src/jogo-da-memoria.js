class JogoDaMemoria {
  //se ,amdar um obj = { tela: 1, idade: 2, etc: 3}
  //vai ignorar o resto das propriedades e pegar somente a propriedade tela
  constructor({ tela }) {
    this.tela = tela;

    // caminho do arquivo sempre relativo ao index.html
    this.heroisIniciais = [
      { img: "./arquivos/batman.png", nome: "batman" },
      { img: "./arquivos/antena man.png", nome: "antena man" },
      { img: "./arquivos/mirnha.png", nome: "mirnha" },
      { img: "./arquivos/super gild.png", nome: "super gild" },
    ];
    this.iconePadrao = "./arquivos/default.png";
    this.heroisEscondidos = [];
    this.heroisSelecionados = [];
  }
  //para usar o this, não podemos o static
  inicializar() {
    this.tela.atualizarImagens(this.heroisIniciais);
    // quando essa função executar, vai ignorar o this de window
    // ela vai usar o this dessa tela
    this.tela.configurarBotaoJogar(this.jogar.bind(this));
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this));
  }
  esconderHerois(herois) {
    const heroisOcultos = herois.map(({ nome, id }) => ({
      id,
      nome,
      img: this.iconePadrao,
    }));

    this.tela.atualizarImagens(heroisOcultos);
    this.heroisEscondidos = heroisOcultos;
  }
  embaralhar() {
    const copias = this.heroisIniciais

      // duplicar os itens
      .concat(this.heroisIniciais)
      // entrar em cada um dos itens e gerar um id para cada
      .map((item) => {
        return Object.assign({}, item, { id: Math.random() / 0.5 });
      })
      // ordenar
      .sort(() => Math.random() - 0.5);

    this.tela.atualizarImagens(copias);
    setTimeout(() => {
      this.esconderHerois(copias);
    }, 1000);
  }

  verificarSelecao(id, nome) {
    const item = { id, nome };
    // vamos verificar a quantidade de herois selecionados
    // e tomar ação se escolheu certo ou errado
    const heroisSelecionados = this.heroisSelecionados.length;
    switch (heroisSelecionados) {
      case 0:
        //adiciona a escolha na lista, esperando pela proxima
        //clicada
        this.heroisSelecionados.push(item);
        break;
      case 1:
        //se a quantidade  for 1,significa que o usuario só pode escolher mais um
        const [opcao1] = this.heroisSelecionados;
        //zerar itens para nao selecionar mais de dois
        this.heroisSelecionados = [];
        //conferir se o nome e o id são iguais
        if (opcao1.nome === item.nome && opcao1.id !== item.id) {
          //aqui verifica se os id sao diferentes
          alert("combinação correta!" + item.nome);
          return;
        }
        alert("combinação incorreta!");
        //fim do case

        break;
    }
  }
  jogar() {
    this.embaralhar();
  }
}
