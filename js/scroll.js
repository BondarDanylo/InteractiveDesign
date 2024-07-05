const myScroll = document.getElementById('scroll')
const scrollMob = document.querySelector('.scroll-mob')
const items = myScroll.querySelectorAll('.elem')
const body = document.querySelector('body')
const content = document.getElementById('content')
const upBtn = document.getElementById('up')
const downBtn = document.getElementById('down')
const footer = document.querySelector('footer')

let diff = 0


if(window.innerWidth < 750) {
    myScroll.style.display = 'none'
}

if(window.innerHeight > 900) {
    diff = 30
}

upBtn.addEventListener('click', function(){
    window.scrollBy({top: -80, behavior: 'smooth'})
})

downBtn.addEventListener('click', function(){
    window.scrollBy({top: 80, behavior: 'smooth'})
})

window.addEventListener('scroll', function(){

    let step = (content.scrollHeight - footer.clientHeight)/items.length - diff
    let mainStep = Math.round(window.pageYOffset/step)
    if (mainStep < 11){
        items[0].classList.remove('active')
        items.forEach(function(elem){
            elem.classList.remove('show')
        })
        items[mainStep].classList.add('show')
        if(mainStep > 0 && mainStep < 12) {
            items[mainStep].classList.add('show')
            items[mainStep-1].classList.add('show')
            items[mainStep+1].classList.add('show')
        }else if (mainStep == 0) {
            items[mainStep].classList.add('show')
            items[mainStep+1].classList.add('show')
            items[mainStep+2].classList.add('show')
        }
    }
})
