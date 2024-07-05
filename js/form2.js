$( document ).ready(function() {
    let leftCursor5 = 5
    let i5 = 0

    let leftCursor6 = 5
    let i6 = 0

    let leftCursor7 = 5
    let i7 = 0

    let leftCursor8 = 5
    let i8 = 0


    const input5 = document.getElementById('input5')
    const line5 = document.getElementById('line5')
    const dots5 = line5.querySelectorAll('span')
    const cursor5 = document.getElementById('cursor5')
    

    const input6 = document.getElementById('input6')
    const line6 = document.getElementById('line6')
    const dots6 = line6.querySelectorAll('span')
    const cursor6 = document.getElementById('cursor6')


    const input7 = document.getElementById('input7')
    const line7 = document.getElementById('line7')
    const dots7 = line7.querySelectorAll('span')
    const cursor7 = document.getElementById('cursor7')


    const input8 = document.getElementById('input8')
    const line8 = document.getElementById('line8')
    const dots8 = line8.querySelectorAll('span')
    const cursor8 = document.getElementById('cursor8')
    const sub2 = document.getElementById('submit2')


    
    input5.addEventListener('focus',function(){
        cursor5.style.display = 'inline-block'
        dots5[i5].textContent = ' '
    })
    input5.addEventListener('focusout',function(){
        cursor5.style.display = 'none'
        dots5[i5].textContent = '.'
    })

    input5.addEventListener('keydown', function(e){
        input5.selectionStart = input5.value.length
        if(input5.scrollWidth <= input5.clientWidth ){
            if(e.key != 'Backspace' && e.key != 'ArrowUp' && e.key != 'ArrowDown'&& e.key != 'ArrowLeft'&& e.key != 'ArrowRight'&& e.key != 'Tab' && e.key != 'CapsLock'  && e.key != 'Control' && e.key != 'Alt' && e.key != 'Shift' && e.key != 'Meta'  && e.key != 'Enter') {
                if (i5 < 100) {
                    if(i5 < 15) {
                        dots5[i5].textContent = ' '
                        dots5[i5+1].textContent = ' '
                    }else {
                        dots5[i5].textContent = ' '
                        cursor5.style.display = 'none'
                    }
                    i5++
                    leftCursor5 +=22
                    cursor5.style.left = leftCursor5 +'px'
                }
            }else if (e.key == 'Backspace') {
                if(i5 > 0) {
                    cursor5.style.display = 'inline-block'
                    leftCursor5 -=22
                    cursor5.style.left = leftCursor5 +'px'
                    i5--
                    dots5[i5+1].textContent = '.'
                }
            }
        }
    })



    input6.addEventListener('focus',function(){
        cursor6.style.display = 'inline-block'
        dots6[i6].textContent = ' '
    })
    input6.addEventListener('focusout',function(){
        cursor6.style.display = 'none'
        dots6[i6].textContent = '.'
    })

    input6.addEventListener('keydown', function(e){
        input6.selectionStart = input6.value.length
        if(input6.scrollWidth <= input6.clientWidth ){
            if(e.key != 'Backspace' && e.key != 'ArrowUp' && e.key != 'ArrowDown'&& e.key != 'ArrowLeft'&& e.key != 'ArrowRight'&& e.key != 'Tab' && e.key != 'CapsLock'  && e.key != 'Control' && e.key != 'Alt' && e.key != 'Shift' && e.key != 'Meta'  && e.key != 'Enter') {
                if (i6 < 100) {
                    if(i6 < 15) {
                        dots6[i6].textContent = ' '
                        dots6[i6+1].textContent = ' '
                    }else {
                        dots6[i6].textContent = ' '
                        cursor6.style.display = 'none'
                    }
                    i6++
                    leftCursor6 +=22
                    cursor6.style.left = leftCursor6 +'px'
                }
            }else if (e.key == 'Backspace') {
                if(i6 > 0) {
                    cursor6.style.display = 'inline-block'
                    leftCursor6 -=22
                    cursor6.style.left = leftCursor6 +'px'
                    i6--
                    dots6[i6+1].textContent = '.'
                }
            }
        }
    })



    input7.addEventListener('focus',function(){
        cursor7.style.display = 'inline-block'
        dots7[i7].textContent = ' '
    })
    input7.addEventListener('focusout',function(){
        cursor7.style.display = 'none'
        dots7[i7].textContent = '.'
    })

    input7.addEventListener('keydown', function(e){
        input7.selectionStart = input7.value.length
        if(input7.scrollWidth <= input7.clientWidth ){
            if(e.key != 'Backspace' && e.key != 'ArrowUp' && e.key != 'ArrowDown'&& e.key != 'ArrowLeft'&& e.key != 'ArrowRight'&& e.key != 'Tab' && e.key != 'CapsLock'  && e.key != 'Control' && e.key != 'Alt' && e.key != 'Shift' && e.key != 'Meta'  && e.key != 'Enter') {
                if (i7 < 100) {
                    if(i7 < 15) {
                        dots7[i7].textContent = ' '
                        dots7[i7+1].textContent = ' '
                    }else {
                        dots7[i7].textContent = ' '
                        cursor7.style.display = 'none'
                    }
                    i7++
                    leftCursor7 +=22
                    cursor7.style.left = leftCursor7 +'px'
                }
            }else if (e.key == 'Backspace') {
                if(i7 > 0) {
                    cursor7.style.display = 'inline-block'
                    leftCursor7 -=22
                    cursor7.style.left = leftCursor7 +'px'
                    i7--
                    dots7[i7+1].textContent = '.'
                }
            }
        }
    })


    input8.addEventListener('focus',function(){
        cursor8.style.display = 'inline-block'
        dots8[i8].textContent = ' '
    })
    input8.addEventListener('focusout',function(){
        cursor8.style.display = 'none'
        dots8[i8].textContent = '.'
    })

    input8.addEventListener('keydown', function(e){
        input8.selectionStart = input8.value.length
        if(input8.scrollWidth <= input8.clientWidth ){
            if(e.key != 'Backspace' && e.key != 'ArrowUp' && e.key != 'ArrowDown'&& e.key != 'ArrowLeft'&& e.key != 'ArrowRight'&& e.key != 'Tab' && e.key != 'CapsLock'  && e.key != 'Control' && e.key != 'Alt' && e.key != 'Shift' && e.key != 'Meta'  && e.key != 'Enter') {
                if (i8 < 100) {
                    if(i8 < 15) {
                        dots8[i8].textContent = ' '
                        dots8[i8+1].textContent = ' '
                    }else {
                        dots8[i8].textContent = ' '
                        cursor8.style.display = 'none'
                    }
                    i8++
                    leftCursor8 +=22
                    cursor8.style.left = leftCursor8 +'px'
                }
            }else if (e.key == 'Backspace') {
                if(i8 > 0) {
                    cursor8.style.display = 'inline-block'
                    leftCursor8 -=22
                    cursor8.style.left = leftCursor8 +'px'
                    i8--
                    dots8[i8+1].textContent = '.'
                }
            }
        }
    })



    sub2.addEventListener('click',function(e) {

        const ruAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
        const enAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        e.preventDefault()
        let nameValue = input5.value
        const error5 = document.getElementById('error5')
        if(nameValue.length > 20 || nameValue.length < 3) {
            error5.style.display = 'block'
            return false
        }else {
            error5.style.display = 'none'
        }


        let emailValue = input6.value
        const error6 = document.getElementById('error6')
        for(let i = 0; i < emailValue.length; i++){
            if(ruAlphabet.includes(emailValue[i]) || !emailValue.includes('@')){
                error6.style.display = 'block'
                return false
            }else {
                error6.style.display = 'none'
            }
        }


        let numberValue = input7.value
        const error7 = document.getElementById('error7')
        for(let i = 0; i < numberValue.length; i++){
            if(enAlphabet.includes(numberValue[i]) || ruAlphabet.includes(numberValue[i]) ){
                error7.style.display = 'block'
                return false
            }else {
                error7.style.display = 'none'
            }
        }



        let messageValue = input8.value
        const error8 = document.getElementById('error8')
        if(messageValue.length > 1000) {
            error8.style.display = 'block'
            return false
        }else {
            error8.style.display = 'none'
        }


        
        let dataString = 'name='+ nameValue + '&email=' + emailValue + '&phone=' + numberValue  + '&message=' + messageValue;

        $.ajax({
            type: "POST",
            url: "form2.php",
            data: dataString,
            success: function() {
             const thanks = document.getElementById('modalThank')
             thanks.classList.add('showModal')
            }
          });
    })
})