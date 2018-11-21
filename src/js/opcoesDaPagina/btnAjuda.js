;(function(mural) {
  const btnAjuda = document.querySelector('#btnAjuda')
  const api = 'https://ceep.herokuapp.com/cartoes/instrucoes'

  btnAjuda.addEventListener('click', function() {
    // const xhr = new XMLHttpRequest()

    // xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes')
    // xhr.responseType = 'json'
    // xhr.send()
    // xhr.addEventListener('load', () => {
    //   const obj = xhr.response
    //   const ajudas = obj.instrucoes

    //   ajudas.forEach(function(ajuda) {
    //     mural.adicionaCartao(ajuda)
    //   })
    // })

    axios.get(api).then(function(response) {
      response.data.instrucoes.forEach(function(ajuda) {
        mural.adicionaCartao(ajuda)
      })
    })
  })

  btnAjuda.classList.remove('no-js')
})(mural)
