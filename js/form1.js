$( document ).ready(function() {
    let leftCursor = 0
    let i = 0

    let leftCursor2 = 5
    let i2 = 0

    let leftCursor3 = 5
    let i3 = 0

    let leftCursor4 = 5
    let i4 = 0


    const input = document.getElementById('input')
    const line = document.getElementById('line')
    const dots = line.querySelectorAll('span')
    const cursor = document.getElementById('cursor')
    

    const input2 = document.getElementById('input2')
    const line2 = document.getElementById('line2')
    const dots2 = line2.querySelectorAll('span')
    const cursor2 = document.getElementById('cursor2')


    const input3 = document.getElementById('input3')
    const line3 = document.getElementById('line3')
    const dots3 = line3.querySelectorAll('span')
    const cursor3 = document.getElementById('cursor3')


    const input4 = document.getElementById('input4')
    const line4 = document.getElementById('line4')
    const dots4 = line4.querySelectorAll('span')
    const cursor4 = document.getElementById('cursor4')
    const sub = document.getElementById('submit')


    
    input.addEventListener('focus',function(){
        cursor.style.display = 'inline-block'
        dots[i].textContent = ' '
    })
    input.addEventListener('focusout',function(){
        cursor.style.display = 'none'
        dots[i].textContent = '.'
    })

    input.addEventListener('keydown', function(e){
        input.selectionStart = input.value.length
        if(input.scrollWidth <= input.clientWidth ){
            if(e.key != 'Backspace' && e.key != 'ArrowUp' && e.key != 'ArrowDown'&& e.key != 'ArrowLeft'&& e.key != 'ArrowRight'&& e.key != 'Tab' && e.key != 'CapsLock'  && e.key != 'Control' && e.key != 'Alt' && e.key != 'Shift' && e.key != 'Meta'  && e.key != 'Enter') {
                if (i < 100) {
                    if(i < 15) {
                        dots[i].textContent = ' '
                        dots[i+1].textContent = ' '
                    }else {
                        dots[i].textContent = ' '
                        cursor.style.display = 'none'
                    }
                    i++
                    leftCursor +=22
                    cursor.style.left = leftCursor +'px'
                }
            }else if (e.key == 'Backspace') {
                if(i > 0) {
                    cursor.style.display = 'inline-block'
                    leftCursor -=22
                    cursor.style.left = leftCursor +'px'
                    i--
                    dots[i+1].textContent = '.'
                }
            }
        }
    })



    input2.addEventListener('focus',function(){
        cursor2.style.display = 'inline-block'
        dots2[i2].textContent = ' '
    })
    input2.addEventListener('focusout',function(){
        cursor2.style.display = 'none'
        dots2[i2].textContent = '.'
    })

    input2.addEventListener('keydown', function(e){
        input2.selectionStart = input2.value.length
        if(input2.scrollWidth <= input2.clientWidth ){
            if(e.key != 'Backspace' && e.key != 'ArrowUp' && e.key != 'ArrowDown'&& e.key != 'ArrowLeft'&& e.key != 'ArrowRight'&& e.key != 'Tab' && e.key != 'CapsLock'  && e.key != 'Control' && e.key != 'Alt' && e.key != 'Shift' && e.key != 'Meta'  && e.key != 'Enter') {
                if (i2 < 100) {
                    if(i2 < 15) {
                        dots2[i2].textContent = ' '
                        dots2[i2+1].textContent = ' '
                    }else {
                        dots2[i2].textContent = ' '
                        cursor2.style.display = 'none'
                    }
                    i2++
                    leftCursor2 +=22
                    cursor2.style.left = leftCursor2 +'px'
                }
            }else if (e.key == 'Backspace') {
                if(i2 > 0) {
                    cursor2.style.display = 'inline-block'
                    leftCursor2 -=22
                    cursor2.style.left = leftCursor2 +'px'
                    i2--
                    dots2[i2+1].textContent = '.'
                }
            }
        }
    })



    input3.addEventListener('focus',function(){
        cursor3.style.display = 'inline-block'
        dots3[i3].textContent = ' '
    })
    input3.addEventListener('focusout',function(){
        cursor3.style.display = 'none'
        dots3[i3].textContent = '.'
    })

    input3.addEventListener('keydown', function(e){
        if(input3.scrollWidth <= input3.clientWidth ){
            input3.selectionStart = input3.value.length
            if(e.key != 'Backspace' && e.key != 'ArrowUp' && e.key != 'ArrowDown'&& e.key != 'ArrowLeft'&& e.key != 'ArrowRight'&& e.key != 'Tab' && e.key != 'CapsLock'  && e.key != 'Control' && e.key != 'Alt' && e.key != 'Shift' && e.key != 'Meta'  && e.key != 'Enter') {
                if (i3 < 100) {
                    if(i3 < 15) {
                        dots3[i3].textContent = ' '
                        dots3[i3+1].textContent = ' '
                    }else {
                        dots2[i3].textContent = ' '
                        cursor3.style.display = 'none'
                    }
                    i3++
                    leftCursor3 +=22
                    cursor3.style.left = leftCursor3 +'px'
                }
            }else if (e.key == 'Backspace') {
                if(i3 > 0) {
                    cursor3.style.display = 'inline-block'
                    leftCursor3 -=22
                    cursor3.style.left = leftCursor3 +'px'
                    i3--
                    dots3[i3+1].textContent = '.'
                }
            }
        }
    })


    input4.addEventListener('focus',function(){
        cursor4.style.display = 'inline-block'
        dots4[i4].textContent = ' '
    })
    input4.addEventListener('focusout',function(){
        cursor4.style.display = 'none'
        dots4[i4].textContent = '.'
    })

    input4.addEventListener('keydown', function(e){
        input4.selectionStart = input4.value.length
        if(input4.scrollWidth <= input4.clientWidth ){
            if(e.key != 'Backspace' && e.key != 'ArrowUp' && e.key != 'ArrowDown'&& e.key != 'ArrowLeft'&& e.key != 'ArrowRight'&& e.key != 'Tab' && e.key != 'CapsLock'  && e.key != 'Control' && e.key != 'Alt' && e.key != 'Shift' && e.key != 'Meta'  && e.key != 'Enter') {
                if (i4 < 1000) {
                    if(i4 < 15) {
                        dots4[i4].textContent = ' '
                        dots4[i4+1].textContent = ' '
                    }else {
                        dots4[i4].textContent = ' '
                        cursor4.style.display = 'none'
                    }
                    i4++
                    leftCursor4 +=22
                    cursor4.style.left = leftCursor4 +'px'
                }
            }else if (e.key == 'Backspace') {
                if(i4 > 0) {
                    cursor4.style.display = 'inline-block'
                    leftCursor4 -=22
                    cursor4.style.left = leftCursor4 +'px'
                    i4--
                    dots4[i4+1].textContent = '.'
                }
            }
        }
    })



    sub.addEventListener('click',function(e) {

        const ruAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
        const enAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        e.preventDefault()
        let nameValue = input.value
        const error1 = document.getElementById('error1')
        if(nameValue.length > 20 || nameValue.length < 3) {
            error1.style.display = 'block'
            return false
        }else {
            error1.style.display = 'none'
        }


        let emailValue = input2.value
        const error2 = document.getElementById('error2')
        for(let i = 0; i < emailValue.length; i++){
            if(ruAlphabet.includes(emailValue[i]) || !emailValue.includes('@')){
                error2.style.display = 'block'
                return false
            }else {
                error2.style.display = 'none'
            }
        }



        let numberValue = input3.value
        const error3 = document.getElementById('error3')
        for(let i = 0; i < numberValue.length; i++){
            if(enAlphabet.includes(numberValue[i]) || ruAlphabet.includes(numberValue[i])){
                error3.style.display = 'block'
                return false
            }else {
                error3.style.display = 'none'
            }
        }
        let messageValue = input4.value
        const error4 = document.getElementById('error4')
        if(messageValue.length > 1000) {
            error4.style.display = 'block'
            return false
        }else {
            error4.style.display = 'none'
        }



        let dataString = 'name='+ nameValue + '&email=' + emailValue + '&phone=' + numberValue  + '&message=' + messageValue;

        $.ajax({
            type: "POST",
            url: "form1.php",
            data: dataString,
            success: function() {
             const thanks = document.getElementById('modalThank')
             thanks.classList.add('showModal')
            }
          });
    })
})