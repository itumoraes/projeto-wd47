;(function() {
  const btn = document.querySelector('.opcoesDoCartao-remove')
  
  btn.addEventListener('click', function() {
    const cartao = btn.parentNode.parentNode
    cartao.classList.add('cartao--some')
    cartao.addEventListener('transitionend', function() {
      cartao.remove()
    })
  })
})()
