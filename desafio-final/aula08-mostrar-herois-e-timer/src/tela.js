const util = Util;
const ID_CONTEUDO = "conteudo";
const ID_BTN_JOGAR = "jogar";
const ID_MENSAGEM = "mensagem";
const CLASSE_INVISIVEL = "invisible";
const ID_CARREGANDO = "carregando";
const ID_CONTADOR = "contador";
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo";

const MENSAGENS = {
  sucesso: {
    texto: "Combinação correta!",
    classe: "alert-success",
  },
  erro: {
    texto: "Combinação incorreta!",
    classe: "alert-danger",
  },
};
class Tela {
  static obterCodigoHtml(item) {
    return `
        <div class="col-md-3">
            <div class="card" style="width: 50%; "onClick="window.verificarSelecao('${item.id}','${item.nome}')"">
                <img name="${item.nome}" src="${item.img}" class="card-img-top" alt="..." />
            </div>
            <br />
        </div> 
        `;
  }
  static configurarBotaoVerificarSelecao(funcaoOnClick) {
    window.verificarSelecao = funcaoOnClick;
  }
  static alterarConteudoHTML(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO);
    conteudo.innerHTML = codigoHtml;
  }
  static gerarStringHTMLPelaImagem(data) {
    return data.map(Tela.obterCodigoHtml).join("");
  }

  static atualizarImagens(itens) {
    // para cada item da lista, vai executar a funcao obterCodigoHtml
    //ao final, vai concatenar tudo em uma unica string
    //muda de array para String
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens);
    Tela.alterarConteudoHTML(codigoHtml);
  }
  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR);
    btnJogar.onclick = funcaoOnClick;
  }
  static exibirHerois(nomeDoHeroi, img) {
    const elementosHtml = document.getElementsByName(nomeDoHeroi);
    //para cada elemento encontrado na tela, vamos alterar a imagem
    //para a imagem inicial dele
    //com o forEach, para cada item, dentro dos () setamos o valor
    // de iamgem
    elementosHtml.forEach((item) => (item.src = img));
  }
  static async exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM);
    if (sucesso) {
      elemento.classList.remove(MENSAGENS.erro.classe);
      elemento.classList.add(MENSAGENS.sucesso.classe);
      elemento.innerText = MENSAGENS.sucesso.texto;
    } else {
      elemento.classList.remove(MENSAGENS.sucesso.classe);
      elemento.classList.add(MENSAGENS.erro.classe);
      elemento.innerText = MENSAGENS.erro.texto;
    }

    elemento.classList.remove(CLASSE_INVISIVEL);
    await util.timeout(1000);
    elemento.classList.add(CLASSE_INVISIVEL);
  }
  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens);
    Tela.alterarConteudoHTML(codigoHtml);
  }
  static exibirHerois(nome, img) {
    const elements = document.getElementsByName(nome);
    elements.forEach((item) => (item.src = img));
  }
  static configurarBotaoJogar(funcaoOnclick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR);
    btnJogar.onclick = funcaoOnclick;
  }
  static configurarClickVerificarSelecao(funcaoOnclick) {
    window.verificarSelecao = funcaoOnclick;
  }
  static exibirCarregando(mostrar = true) {
    const carregando = document.getElementById(ID_CARREGANDO);
    if (mostrar) {
      carregando.classList.remove(CLASSE_INVISIVEL);
      return;
    }
    carregando.classList.add(CLASSE_INVISIVEL);
  }
  static iniciarContador() {
    let contarAte = 3;
    const elementoContador = document.getElementById(ID_CONTADOR);
    const identificadorNoTexto = "$$contador";
    const textoPadrao = `Começando em ${identificadorNoTexto} segundos...`;
    const atualizarTexto = () =>
      (elementoContador.innerHTML = textoPadrao.replace(
        identificadorNoTexto,
        contarAte--
      ));

    atualizarTexto();
    //a cada segundo,vai chamar essa funcao de atualizar texto
    const idDoIntervalo = setInterval(atualizarTexto, 1000);
    return idDoIntervalo;
  }
  static limparContador(idContador) {
    clearInterval(idContador);
    document.getElementById(ID_CONTADOR).innerHTML = "";
  }
  static configurarBotaoMostrarTudo(funcaoOnClick) {
    const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO);
    btnMostrarTudo.onclick = funcaoOnClick;
  }
}
