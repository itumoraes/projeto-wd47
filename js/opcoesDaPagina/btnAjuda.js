;(function(mural) {
  const btnAjuda = document.querySelector('#btnAjuda')

  btnAjuda.addEventListener('click', function() {
    const ajudas = [
      {
        conteudo: 'Bem vindo ao Ceep',
        cor: '#F05450'
      },
      {
        conteudo: 'Clique no btn Linhas para mudar o layout',
        cor: '#92C4EC'
      }
    ]

    ajudas.forEach(function(ajuda) {
      mural.adicionaCartao(ajuda)
    })
  })

  btnAjuda.classList.remove('no-js')
})(mural)
