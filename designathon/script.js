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


function getTime() {

    $.post("https://currentmillis.com/time/minutes-since-unix-epoch.php",(data)=>{
        console.log(data)
    })

}