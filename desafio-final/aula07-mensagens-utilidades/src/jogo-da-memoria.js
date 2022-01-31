class JogoDaMemoria {
  //se ,amdar um obj = { tela: 1, idade: 2, etc: 3}
  //vai ignorar o resto das propriedades e pegar somente a propriedade tela
  constructor({ tela, util }) {
    (this.tela = tela), (this.util = util);

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
  async embaralhar() {
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
    this.tela.exibirCarregando();
    await this.util.timeout(1000);
    this.esconderHerois(copias);
    this.tela.exibirCarregando(false);
  }

  exibirHerois(nomeDoHeroi) {
    //vvamos procurar esse herois pelo nome em nossos heroisIniciais
    //vamos obter somente a  imagem dele
    const { img } = this.heroisIniciais.find(
      ({ nome }) => nomeDoHeroi === nome
    );
    //vamos criar a funcao na tela, para exibir somente o heroi selecionado
    this.tela.exibirHerois(nomeDoHeroi, img);
  }

  verificarSelecao(id, nome) {
    const item = { id, nome };
    // alert(`Olá: ${nome}, id: ${id}`)
    const heroisSelecionados = this.heroisSelecionados.length;
    switch (heroisSelecionados) {
      case 0:
        this.heroisSelecionados.push(item);
        break;
      case 1:
        const [opcao1] = this.heroisSelecionados;
        // zerar itens, para nao selecionar mais de dois
        this.heroisSelecionados = [];
        let deveMostrarMensagem = false;
        if (opcao1.nome === item.nome && opcao1.id !== id) {
          deveMostrarMensagem = true;
          this.exibirHerois(item.nome);
          this.tela.exibirMensagem(true);
          return;
        }
        this.tela.exibirMensagem(false);
        break;
    }
  }
  jogar() {
    this.embaralhar();
  }
}
