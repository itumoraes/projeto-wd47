const mural = (() => {
  'use strict'

  let numeroDoCartao = 0

  const adicionaCartao = cartaoObj => {
    numeroDoCartao++

    const conteudoDoCartao = cartaoObj.conteudo
    const cartao = $(`
    <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao" style="background-color: ${cartaoObj.cor}">
      <div class="opcoesDoCartao">
        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
          <svg><use xlink:href="#iconeRemover"></use></svg>
        </button>

        <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
        <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
          Padrão
        </label>

        <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
        <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
          Importante
        </label>

        <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
        <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
          Tarefa
        </label>

        <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
        <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
          Inspiração
        </label>
      </div>
      <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
    </article>
    `)

    cartao.on('focusin', () => {
      cartao.addClass('cartao--focado')
    })

    cartao.on('focusout', () => {
      cartao.removeClass('cartao--focado')
    })

    cartao.on('change', '.opcoesDoCartao-radioTipo', event => {
      cartao.css('background-color', event.target.value)
    })

    cartao.on('keydown', event => {
      if (event.target.classList.contains('opcoesDoCartao-opcao') && (event.key === 'Enter' || event.key === ' ')) {
        event.target.click()
      }
    })

    cartao.on('click', event => {
      const elementoSelecionado = event.target

      if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
        cartao.addClass('cartao--some')
        cartao.on('transitionend', () => {
          cartao.remove()
        })
      }
    })

    $('.mural').append(cartao)
  }

  $.ajax({
    url: 'https://ceep.herokuapp.com/cartoes/carregar',
    method: 'GET',
    data: {
      usuario: 'italo.moraes@caelum.com.br',
    },
    dataType: 'jsonp',
    success: function(objeto) {
      const cartoes = objeto.cartoes
      cartoes.forEach(function(cartao) {
        console.log(cartao)
        adicionaCartao(cartao)
      })
    }
  })

  return {
    adicionaCartao
  }
})()
