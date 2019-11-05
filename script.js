window.onload = function() {
    setTimeout(function () {
        document.body.classList.add('ready')
    }, 600);
}


function scrollDown() {
    
    $('html, body').animate({
        scrollTop: window.innerHeight
    }, 1200)

}