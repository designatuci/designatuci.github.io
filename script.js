window.onload = function() {
    setTimeout(function () {
        document.body.classList.add('ready')
    }, 200);
}


function scrollDown() {
    
    $('html, body').animate({
        scrollTop: window.innerHeight
    }, 1200)

}