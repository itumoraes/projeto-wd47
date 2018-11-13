;(function() {
  const cartoes = document.querySelectorAll('.cartao')

  for (let j = 0; j < cartoes.length; j++) {
    const cartao = cartoes[j]

    cartao.addEventListener('focusin', function() {
      cartao.classList.add('cartao--focado')
    })

    cartao.addEventListener('focusout', function() {
      cartao.classList.remove('cartao--focado')
    })

    cartao.addEventListener('change', function(event) {
      const elementoSelecionado = event.target
      const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')

      if (isRadioTipo) {
        cartao.style.backgroundColor = elementoSelecionado.value
      }
    })
  }
})()
