const checkMark = document.createElement('span')
checkMark.innerHTML = ' <i class="fa-solid fa-check"></i>'
// recupera tutti gli elementi h1 che siano dentro un elemento di classe .box
// (immediati discendenti (figli), grazie al >, non discendenti qualsiasi (nipoti, pronipoti, ecc.))
const elements = document.querySelectorAll('.box > h1')

// per ciacun h1 che sta in un elemento con classe box
elements.forEach(element => {
  // aggiungi un event listener che, al click del mouse,
  // appenda il simbolo del "check-box" (preso da font-awesome)
  // al testo esistente nel h1 cliccato
  element.addEventListener('click', (e) => {
    e.target.appendChild(checkMark)
  })
})