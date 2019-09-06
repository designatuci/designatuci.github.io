window.onload = function() {
    setTimeout(function () {
        document.body.classList.add('ready')
    }, 10);
}


function scrollDown() {
    
    $('html, body').animate({
        scrollTop: window.innerHeight
    }, 1200)

}