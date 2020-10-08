$(window).on("load", ()=>{

    $(".link").click((e)=>{
        $(".link.selected").removeClass("selected")
        $(e.target).addClass("selected")
    })

})



function ready(wait = 0) {

    setTimeout(() => {
        document.body.className = "ready"
    }, 200+wait);

}