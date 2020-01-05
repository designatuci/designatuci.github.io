//
// Vars
//

var s = 0




//
// Ready
//
function ready(wait = 0) {
    setTimeout(() => {
        document.body.className = "ready"
    }, wait);
}


//
// Functions
//

function scroll() { s = window.pageYOffset

    $('.elide').each(function(i, obj) {
        if ( s > $(this).offset().top - window.innerHeight + 20 ) {
            $(this).removeClass("elide")
        }
    });


}


