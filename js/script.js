$(document).ready(function(e){
    // menu
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.main_nav').toggleClass('showMenu')

    })

    if(window.innerWidth < 750) {
        const subBtn = document.getElementById('submit')
        subBtn.value = '[Leave a request]'
        const modalFooter = document.querySelectorAll('#modalFooter')
        modalFooter.forEach(function(e) {
            const footerSpan = e.querySelector('span')
            footerSpan.textContent = '[Press tap to anywhare]'
        })
    }

    // closeModal
    $(document).click(function (e) {
        if ($(e.target).is('#modalAbout')) {
            $('#modalAbout').removeClass('showModal');
        }
        if ($(e.target).is('#modalALT')) {
            $('#modalALT').removeClass('showModal');
        }
        if ($(e.target).is('#modalBlog')) {
            $('#modalBlog').removeClass('showModal');
        }
        if ($(e.target).is('#modalLeva')) {
            $('#modalLeva').removeClass('showModal');
        }
        if ($(e.target).is('#modalContact')) {
            $('#modalContact').removeClass('showModal');
        }        
        if ($(e.target).is('#modalThank')) {
            $('#modalThank').removeClass('showModal');
        }
    });

 
    $('a[data-modal-btn]').on('click', function(e){
        e.preventDefault();
        let modalId = $(this).attr('href');
        if($(modalId).hasClass('showModal')){
            $('.showModal').removeClass('showModal')
        }else{
            $('.showModal').removeClass('showModal')
            $(modalId).addClass('showModal');
        }

    })
    $('.modal_footer').on('click', function(e){
        $('.modal_container').removeClass('showModal')
    })  
        
    

    // Loader
    setTimeout(function(){
        $('.loader_container').hide();
            setTimeout(function(){
            $('#preloader').hide();
        },200)
    },2000)





    // Email
//     $('.btn_request').click(function(){
//         let name = $('#name').inputmask('unmaskedvalue');
//         let email = $('#email').inputmask('unmaskedvalue');
//         let phone = $('#phone').inputmask('unmaskedvalue');
//         let country = $('#country').inputmask('unmaskedvalue');
//         let messenger = $('#messenger').inputmask('unmaskedvalue');
//         let body = '<div>'
//         +'Name: '+ name + '<br>' 
//         + 'Email: ' + email + '<br>' 
//         +'Phone: ' + phone + '<br>'
//         +'Country: ' + country + '<br>' 
//         + 'Messanger: '+ messenger+'</div>';
//         Email.send({
//             Host : "smtp.gmail.com",
//             Username : "client@gmail.com",
//             Password : "client",
//             To : 'Test@gmail.com',
//             From : "client@gmail.com",
//             Subject : "New message",
//             Body : body
//         }).then(
//             $('.showModal').removeClass('showModal')
//         ).then(
//             $('#modalThank').addClass('showModal')
//         );
//     })
})
