

// const alvo = document.querySelector('[data-pi1]')
// const alvo2 = document.querySelector('[data-pf1]')
// const alvo3 = document.querySelector('[data-si1]')
// const alvo4 = document.querySelector('[data-sf1]')

// let mudarCor = document.querySelectorAll('#mudarCor')
// const cor = 'navPreto'

//  let  trocarCor = () => {
//   mudarCor.forEach(element => {
//     const windowTop = window.pageYOffset +50
//   console.log(windowTop + 'WP')
//   console.log(alvo.offsetTop)
//   if((windowTop>alvo.offsetTop && windowTop<alvo2.offsetTop) ||(windowTop>alvo3.offsetTop && windowTop<alvo4.offsetTop) ){
//     element.classList.add(cor)
//   }else{
//     element.classList.remove(cor)
//   }
//   })
//   }
// window.addEventListener('scroll', trocarCor)

let menu = document.querySelector('[data-menu]')
const bg = 'menuNavegacao'

let trocarBg = () =>{
  const windowTop = window.pageYOffset
  if (windowTop > 60){
    menu.classList.add(bg)
  }else{
    menu.classList.remove(bg)
  }
}
window.addEventListener('scroll', trocarBg)

//efeito typing
let index = 0
let currentText = 'Desenvolvedor Web'
let letter = ''
// console.log(text.length)

function type() {

  letter = currentText.slice(0, ++index)
  document.querySelector('.typing').textContent = letter
  if (letter.length === currentText.length) {
    index = 0
  }
    function ret(){
      if(letter.length === 17){
        return 5000
      }else{
        return 200
      }
    }
  setTimeout(type, ret())
  
  
  // setInterval(type, 2000)
}
type()