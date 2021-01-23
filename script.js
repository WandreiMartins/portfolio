

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


//menu de navegação ----------------------------------------
// let menu = document.querySelector('[data-menu]')
// const bg = 'menuNavegacao'

// let trocarBg = () =>{
//   const windowTop = window.pageYOffset
//   if (windowTop > 60){
//     menu.classList.add(bg)
//   }else{
//     menu.classList.remove(bg)
//   }
// }
// window.addEventListener('scroll', trocarBg)


//função para escrever o nome -----------------------------------
//efeito typing
let index = 0
let currentText = 'Desenvolvedor Web'
let letter = ''


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
  
}
type()

//função para carregar barra circular
const skills = document.querySelectorAll(['[data-html]', '[data-css]', '[data-js]', '[data-bs]', '[data-git]' ])
let contador = [0, 0, 0, 0, 0]
let porc = [60, 70, 40, 40, 50]
const tempo = [16, 14, 25, 25, 20]

     function contagem(){ 
for (let i =0; i<skills.length; i++){
      setInterval(() => {
          if(contador[i] == porc[i]){
            clearInterval()
          }else{
            contador[i]++
            skills[i].textContent = contador[i] + '%'
          }
        },tempo[i])

      }      

    }
    contagem()  


    //função hamburguer------------------------------------------------------------
  //  let navMenu = document.querySelector('[data-menu]')
  //  let check = document.querySelector('[data-check]').checked
  //  console.log(check)
  //   function moverMenu(){
  //       if(check = true){
  //         navMenu.classList.remove('esconder')
  //       }else{
  //         navMenu.classList.add('esconder')
  //       }
  //   }
   