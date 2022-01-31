const ID_CONTEUDO = "conteudo";
const ID_BTN_JOGAR = "jogar";
class Tela {
  static obterCodigoHtml(item) {
    return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img name="${item.nome}" src="${item.img}" class="card-img-top" alt="..." />
            </div>
            <br />
        </div> 
        `;
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
}
