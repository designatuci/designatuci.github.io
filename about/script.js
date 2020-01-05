$(function() {

    $(".person").click(function() {

        $(this).attr("hidden","true")
        $("body").css({
            overflow: 'hidden'
        })
        $("#modal").removeAttr("hidden")
        $("#modal .container .window").html($(this).html())

        // Enable exiting
        $("#modal .exit").click(function() {
            $("#modal").attr("hidden","true")
            $(this).removeAttr("hidden")
            $("body").css({
                overflow: ''
            })
        })
        // Background click exiting 
        $("#modal .container").click(function(e) {
            const a = Math.abs(e.clientX - window.innerWidth/2) - $("#modal .icon").innerWidth()/2
            if (a > 0 ) {
                $("#modal").attr("hidden","true")
                $(this).removeAttr("hidden")
                $("body").css({
                    overflow: ''
                })
            }            
        })

        
    })



})


function ready(wait = 0) {
    setTimeout(() => {
        document.body.className = "ready"
    }, 200+wait);
}