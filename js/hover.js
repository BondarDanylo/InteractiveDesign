const list = document.getElementById('navigation_list')
const listItems = list.querySelectorAll('li')

let active
list.addEventListener('mouseover', function(){
    for (let i = 0; listItems.length; i++) {
        if(listItems[i].classList.contains('active')) {
            active = listItems[i];
            listItems[i].classList.remove('active')
        }
    }
})
list.addEventListener('mouseout', function(){
    active.classList.add('active')
})