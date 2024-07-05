window.addEventListener('load', function() {
  
    let writer = document.querySelector('.writer');
    let setter = document.querySelector('.setter');
    let cursor = document.querySelector('.cursor');
    let terminal = document.querySelector('.terminal');
    cursor.style.left = "0px";

    function write() {
        writer.innerHTML = this.value.replace(/\n/g, "<br />");
    }

    function move(event) {
        let e = event || window.event;
        let count = this.value.length;
        let keycode = e.keyCode || e.which;
        if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
            cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
        } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
            cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
        }
    }
    
    setter.addEventListener('keydown', move);
    setter.addEventListener('keyup', write);
    
    setter.addEventListener('keypress', write);
    terminal.addEventListener('click', () => setter.focus());
});