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



    if (s < window.innerWidth) {
        // const skew =  ( 25 * s / window.innerWidth )
        // const rotX =  ( -10 * s / window.innerWidth )
        // const transform = `skewX(${skew}deg) rotateX(${rotX}deg)`
        // $("#design .container").css("transform", transform)
        const multiplier = window.innerWidth * 0.0022
        const tm = Math.round( multiplier * s / window.innerWidth * 100 ) / 100
        const trans0 = `translateY(${-3*tm}rem) translateX(${1.5*tm}rem)`
        const trans1 = `translateY(${6*tm}rem) translateX(${-4*tm}rem) translateZ(-10rem)`
        const trans2 = `translateY(${12*tm}rem) translateX(${-8*tm}rem) translateZ(-20rem`
        $("#design > .container").css("transform",trans0)
        $("#splash .container.two").css("transform",trans1)
        $("#splash .container.three").css("transform",trans2)

        $("#overlay").css("transition-duration","0")
        $("#overlay").css("transform",`translateY(${-4*tm}rem)`)

    }


}


