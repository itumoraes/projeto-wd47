;(function(mural) {
  const form = document.querySelector('.formNovoCartao')
  let numeroDoCartao = 0

  form.addEventListener('submit', function(event) {
    event.preventDefault()

    const textarea = document.querySelector('.formNovoCartao-conteudo')
    const isTextAreaVazio = textarea.value.trim().length === 0

    if (isTextAreaVazio) {
      const msgErro = document.createElement('div')
      
      msgErro.classList.add('formNovoCartao-msg')
      msgErro.textContent = 'Formulário inválido. Não digite vários nada!'

      const btnSubmit = form.children[form.children.length - 1]

      form.addEventListener('animationend', function(event) {
        event.target.remove()
      })

      form.insertBefore(msgErro, btnSubmit)
    } else {
      mural.adicionaCartao({ conteudo: textarea.value.trim() })

      textarea.value = ''
    }
  })

  form.classList.remove('no-js')
})(mural)
