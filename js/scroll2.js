const myScroll2 = document.getElementById('modalAboutScroll')
const wrapper = document.getElementById('wrapper')
const lines = wrapper.querySelectorAll('.line')
const upBtn2 = document.getElementById('arrow_up2')
const downBtn2 = document.getElementById('arrow_down2')
const myLength = lines.length
let i = 0
let myTop = 60
let variable = 2


upBtn2.addEventListener('click', function(){
    myScroll2.scrollBy({top: -30, behavior: 'smooth'})
})

downBtn2.addEventListener('click', function(){
    myScroll2.scrollBy({top: 30, behavior: 'smooth'})
})



if(window.innerWidth > 490 && window.innerWidth < 750){
    variable = 3.5
}

myScroll2.addEventListener('scroll', function(){
    
    let step2 = myScroll2.scrollHeight/myLength
    let mainStep2 = Math.round(myScroll2.scrollTop*variable/step2)

    if(mainStep2 >44) {
        mainStep2 = 44
    }
    if (mainStep2 < myLength){
        lines.forEach(function(e){
            e.classList.remove('active')
        })
        if(mainStep2 >= 0 && mainStep2 < 45) {
            lines[mainStep2].classList.toggle('active')
            lines[mainStep2+1].classList.toggle('active')
            lines[mainStep2+2].classList.toggle('active')
            lines[mainStep2+3].classList.toggle('active')
            lines[mainStep2+4].classList.toggle('active')
        }
    }
})

